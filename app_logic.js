class QuizApp {
    constructor(questions) {
        // Shuffle the questions array while preserving original indices
        this.originalQuestions = [...questions];
        this.shuffledQuestions = this.shuffleArray([...questions]);
        this.originalToShuffledMap = this.createQuestionMap(questions, this.shuffledQuestions);
        this.shuffledToOriginalMap = this.createQuestionMap(this.shuffledQuestions, questions);
        
        this.questions = this.shuffledQuestions; // Use shuffled questions for the quiz
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswers = new Array(this.questions.length).fill(null);
        this.timer = null;
        this.timeRemaining = 0;
        this.startTime = null;
        this.endTime = null;
        this.isTimerMode = false;
        this.navigationVisible = false;
        this.showingCorrectAnswers = false;
        
        this.initializeElements();
        this.bindEvents();
        this.initializeAnswers();
    }

    // Add these new methods to handle question shuffling:
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    createQuestionMap(sourceArray, targetArray) {
        const map = new Map();
        sourceArray.forEach((question, originalIndex) => {
            const shuffledIndex = targetArray.findIndex(q => 
                q.question === question.question && 
                JSON.stringify(q.options) === JSON.stringify(question.options)
            );
            map.set(originalIndex, shuffledIndex);
        });
        return map;
    }

    initializeElements() {
        // Screen elements
        this.startScreen = document.getElementById('startScreen');
        this.questionContainer = document.getElementById('questionContainer');
        this.resultsContainer = document.getElementById('resultsContainer');
        
        // Timer elements
        this.timerInput = document.getElementById('timerInput');
        this.timerDisplay = document.getElementById('timerDisplay');
        this.timeRemainingElement = document.getElementById('timeRemaining');
        
        // Question elements
        this.questionCounter = document.getElementById('questionCounter');
        this.questionText = document.getElementById('questionText');
        this.optionsContainer = document.getElementById('optionsContainer');
        this.instructions = document.getElementById('instructions');
        
        // Navigation elements
        this.navigationPanel = document.getElementById('navigationPanel');
        this.navGrid = document.getElementById('navGrid');
        this.toggleNavBtn = document.getElementById('toggleNav');
        this.overlay = document.getElementById('overlay');
        
        // Control buttons
        this.startWithTimerBtn = document.getElementById('startWithTimer');
        this.startWithoutTimerBtn = document.getElementById('startWithoutTimer');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.checkAnswerBtn = document.getElementById('checkAnswerBtn');
        this.restartBtn = document.getElementById('restartBtn');
        
        // Results elements
        this.finalScore = document.getElementById('finalScore');
        this.resultsText = document.getElementById('resultsText');
        this.correctCount = document.getElementById('correctCount');
        this.wrongCount = document.getElementById('wrongCount');
        this.timeTaken = document.getElementById('timeTaken');
    }

    bindEvents() {
        this.startWithTimerBtn.addEventListener('click', () => this.startQuiz(true));
        this.startWithoutTimerBtn.addEventListener('click', () => this.startQuiz(false));
        this.prevBtn.addEventListener('click', () => this.previousQuestion());
        this.nextBtn.addEventListener('click', () => this.nextQuestion());
        this.checkAnswerBtn.addEventListener('click', () => this.toggleCorrectAnswers());
        this.restartBtn.addEventListener('click', () => this.restartQuiz());
        this.toggleNavBtn.addEventListener('click', () => this.toggleNavigation());
        this.overlay.addEventListener('click', () => this.toggleNavigation());
    }

    initializeAnswers() {
        this.selectedAnswers = this.questions.map(question => {
            return question.type === 'multiple' ? [] : null;
        });
    }

    startQuiz(withTimer) {
        this.isTimerMode = withTimer;
        this.startTime = new Date();
        
        if (withTimer) {
            const minutes = parseInt(this.timerInput.value);
            if (!minutes || minutes < 1 || minutes > 60) {
                alert('Please enter a valid time (1-60 minutes)');
                return;
            }
            this.timeRemaining = minutes * 60;
            this.startTimer();
            this.timerDisplay.classList.add('active');
        }
        
        this.startScreen.classList.add('hidden');
        this.questionContainer.classList.add('active');
        this.createNavigation();
        this.loadQuestion();
    }

    createNavigation() {
        this.navGrid.innerHTML = '';
        
        for (let i = 0; i < this.questions.length; i++) {
            const navItem = document.createElement('div');
            navItem.className = 'nav-item';
            navItem.textContent = i + 1;
            navItem.dataset.index = i;
            
            navItem.addEventListener('click', () => this.navigateToQuestion(i));
            this.navGrid.appendChild(navItem);
        }
        
        this.updateNavigation();
    }

    updateNavigation() {
        const navItems = this.navGrid.querySelectorAll('.nav-item');
        
        navItems.forEach((item, index) => {
            item.classList.remove('current', 'answered', 'partial');
            
            if (index === this.currentQuestion) {
                item.classList.add('current');
            } else if (this.isQuestionAnswered(index)) {
                if (this.isQuestionFullyAnswered(index)) {
                    item.classList.add('answered');
                } else {
                    item.classList.add('partial');
                }
            }
        });
    }

    toggleNavigation() {
        this.navigationVisible = !this.navigationVisible;
        
        if (this.navigationVisible) {
            this.navigationPanel.classList.add('active');
            this.overlay.classList.add('active');
            this.toggleNavBtn.textContent = 'Hide Question Navigator';
        } else {
            this.navigationPanel.classList.remove('active');
            this.overlay.classList.remove('active');
            this.toggleNavBtn.textContent = 'Show Question Navigator';
        }
    }

    navigateToQuestion(index) {
        this.currentQuestion = index;
        this.showingCorrectAnswers = false;
        this.loadQuestion();
        this.updateNavigation();
        this.toggleNavigation();
    }

    isQuestionAnswered(index) {
        const question = this.questions[index];
        const answer = this.selectedAnswers[index];
        
        if (question.type === 'multiple') {
            return Array.isArray(answer) && answer.length > 0;
        } else {
            return answer !== null;
        }
    }

    isQuestionFullyAnswered(index) {
        const question = this.questions[index];
        const answer = this.selectedAnswers[index];
        
        if (question.type === 'multiple') {
            return Array.isArray(answer) && answer.length === question.correct.length;
        } else {
            return answer !== null;
        }
    }

    startTimer() {
        this.updateTimerDisplay();
        this.timer = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.endQuiz();
            }
        }, 1000);
    }

    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        this.timeRemainingElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        this.timerDisplay.classList.remove('warning', 'danger');
        if (this.timeRemaining <= 60) {
            this.timerDisplay.classList.add('danger');
        } else if (this.timeRemaining <= 300) {
            this.timerDisplay.classList.add('warning');
        }
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestion];
        const originalIndex = this.shuffledToOriginalMap.get(this.currentQuestion);
        const originalQuestion = this.originalQuestions[originalIndex];
        
        this.questionCounter.innerHTML = `Question ${this.currentQuestion + 1} of ${this.questions.length}`;
        
        const typeIndicator = document.createElement('span');
        typeIndicator.className = `question-type ${question.type}`;
        typeIndicator.textContent = question.type === 'multiple' ? 'Multi-Select' : 'Single Choice';
        this.questionCounter.appendChild(typeIndicator);
        
        if (question.type === 'multiple') {
            this.instructions.textContent = 'Select all correct answers';
            this.instructions.style.background = '#fff3cd';
            this.instructions.style.color = '#856404';
        } else {
            this.instructions.textContent = 'Select one answer';
            this.instructions.style.background = '#d4edda';
            this.instructions.style.color = '#155724';
        }
        
        this.questionText.textContent = question.question;
        
        this.optionsContainer.innerHTML = '';
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            
            if (question.type === 'multiple') {
                optionElement.classList.add('checkbox');
            }
            
            optionElement.textContent = option;
            optionElement.dataset.index = index;
            
            if (question.type === 'multiple') {
                const selectedArray = this.selectedAnswers[this.currentQuestion] || [];
                if (selectedArray.includes(index)) {
                    optionElement.classList.add('selected');
                }
            } else {
                if (this.selectedAnswers[this.currentQuestion] === index) {
                    optionElement.classList.add('selected');
                }
            }
            
            // Highlight correct answers if showing (using original question's correct answers)
            if (this.showingCorrectAnswers && originalQuestion.correct.includes(index)) {
                optionElement.classList.add('correct-answer');
            }
            
            optionElement.addEventListener('click', () => this.selectOption(index));
            this.optionsContainer.appendChild(optionElement);
        });
        
        this.prevBtn.disabled = this.currentQuestion === 0;
        this.nextBtn.disabled = !this.isQuestionAnswered(this.currentQuestion);
        
        if (this.currentQuestion === this.questions.length - 1) {
            this.nextBtn.textContent = 'Finish Quiz';
        } else {
            this.nextBtn.textContent = 'Next';
        }
        
        this.updateNavigation();
    }

    selectOption(index) {
        if (this.showingCorrectAnswers) return;
        
        const question = this.questions[this.currentQuestion];
        const options = this.optionsContainer.querySelectorAll('.option');
        
        if (question.type === 'multiple') {
            if (!Array.isArray(this.selectedAnswers[this.currentQuestion])) {
                this.selectedAnswers[this.currentQuestion] = [];
            }
            
            const selectedArray = this.selectedAnswers[this.currentQuestion];
            const optionIndex = selectedArray.indexOf(index);
            
            if (optionIndex > -1) {
                selectedArray.splice(optionIndex, 1);
                options[index].classList.remove('selected');
            } else {
                selectedArray.push(index);
                options[index].classList.add('selected');
            }
        } else {
            options.forEach(option => option.classList.remove('selected'));
            options[index].classList.add('selected');
            this.selectedAnswers[this.currentQuestion] = index;
        }
        
        this.nextBtn.disabled = !this.isQuestionAnswered(this.currentQuestion);
        this.updateNavigation();
    }

    toggleCorrectAnswers() {
        this.showingCorrectAnswers = !this.showingCorrectAnswers;
        this.loadQuestion();
        this.checkAnswerBtn.textContent = this.showingCorrectAnswers ? 
            'Hide Answers' : 'Check Answer';
    }

    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.currentQuestion--;
            this.showingCorrectAnswers = false;
            this.loadQuestion();
        }
    }

    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.currentQuestion++;
            this.showingCorrectAnswers = false;
            this.loadQuestion();
        } else {
            this.endQuiz();
        }
    }

    calculateScore() {
        let totalScore = 0;
        let correctAnswers = 0;
        
        for (let shuffledIndex = 0; shuffledIndex < this.questions.length; shuffledIndex++) {
            const originalIndex = this.shuffledToOriginalMap.get(shuffledIndex);
            const originalQuestion = this.originalQuestions[originalIndex];
            const userAnswer = this.selectedAnswers[shuffledIndex];
            
            if (originalQuestion.type === 'multiple') {
                if (Array.isArray(userAnswer) && userAnswer.length > 0) {
                    const correctSet = new Set(originalQuestion.correct);
                    const userSet = new Set(userAnswer);
                    
                    if (correctSet.size === userSet.size && 
                        [...correctSet].every(x => userSet.has(x))) {
                        correctAnswers++;
                        totalScore += 1;
                    } else {
                        const correctSelections = userAnswer.filter(ans => originalQuestion.correct.includes(ans));
                        const incorrectSelections = userAnswer.filter(ans => !originalQuestion.correct.includes(ans));
                        const partialScore = Math.max(0, (correctSelections.length - incorrectSelections.length) / originalQuestion.correct.length);
                        totalScore += partialScore;
                    }
                }
            } else {
                if (userAnswer === originalQuestion.correct[0]) {
                    correctAnswers++;
                    totalScore += 1;
                }
            }
        }
        
        this.score = totalScore;
        return { totalScore, correctAnswers };
    }

    endQuiz() {
        this.endTime = new Date();
        
        if (this.timer) {
            clearInterval(this.timer);
        }
        
        const { totalScore, correctAnswers } = this.calculateScore();
        this.showResults(correctAnswers);
    }

    showResults(correctAnswers) {
        this.questionContainer.classList.remove('active');
        this.timerDisplay.classList.remove('active');
        this.navigationPanel.classList.remove('active');
        this.overlay.classList.remove('active');
        this.resultsContainer.classList.add('active');
        
        this.finalScore.textContent = `${this.score.toFixed(1)}/${this.questions.length}`;
        
        const percentage = Math.round((this.score / this.questions.length) * 100);
        
        let resultsMessage = '';
        if (percentage >= 90) {
            resultsMessage = 'Excellent! Outstanding performance! 🎉';
        } else if (percentage >= 80) {
            resultsMessage = 'Great job! You did very well! 👏';
        } else if (percentage >= 70) {
            resultsMessage = 'Good work! Keep practicing! 👍';
        } else if (percentage >= 60) {
            resultsMessage = 'Not bad! There\'s room for improvement! 📚';
        } else {
            resultsMessage = 'Keep studying and try again! 💪';
        }
        
        this.resultsText.textContent = `${resultsMessage} You scored ${percentage}%`;
        
        this.correctCount.textContent = correctAnswers;
        this.wrongCount.textContent = this.questions.length - correctAnswers;
        
        if (this.startTime && this.endTime) {
            const timeDiff = Math.floor((this.endTime - this.startTime) / 1000);
            const minutes = Math.floor(timeDiff / 60);
            const seconds = timeDiff % 60;
            this.timeTaken.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        } else {
            this.timeTaken.textContent = 'N/A';
        }
    }

    restartQuiz() {
        // Reshuffle questions for a new quiz
        this.shuffledQuestions = this.shuffleArray([...this.originalQuestions]);
        this.originalToShuffledMap = this.createQuestionMap(this.originalQuestions, this.shuffledQuestions);
        this.shuffledToOriginalMap = this.createQuestionMap(this.shuffledQuestions, this.originalQuestions);
        this.questions = this.shuffledQuestions;
        
        this.currentQuestion = 0;
        this.score = 0;
        this.timeRemaining = 0;
        this.startTime = null;
        this.endTime = null;
        this.isTimerMode = false;
        this.navigationVisible = false;
        this.showingCorrectAnswers = false;
        
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
        
        this.initializeAnswers();
        
        this.resultsContainer.classList.remove('active');
        this.questionContainer.classList.remove('active');
        this.timerDisplay.classList.remove('active');
        this.navigationPanel.classList.remove('active');
        this.overlay.classList.remove('active');
        
        this.startScreen.classList.remove('hidden');
        this.startScreen.classList.add('active');
        
        this.toggleNavBtn.textContent = 'Show Question Navigator';
        this.checkAnswerBtn.textContent = 'Check Answer';
    }
}