import { quizQuestions } from './questions_answers.js';

// Quiz state
let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let timerInterval = null;
let startTime = null;
let elapsedTime = 0;
let isTimerRunning = false;

// DOM elements
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultsScreen = document.getElementById("results-screen");
const startQuizBtn = document.getElementById("start-quiz");
const questionNumber = document.getElementById("question-number");
const questionProgress = document.getElementById("question-progress");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-quiz");
const restartBtn = document.getElementById("restart-quiz");
const timerDisplay = document.getElementById("timer");
const scoreDisplay = document.getElementById("score");
const startTimerBtn = document.getElementById("start-timer");
const stopTimerBtn = document.getElementById("stop-timer");
const resetTimerBtn = document.getElementById("reset-timer");

// Initialize the quiz
function initializeQuiz() {
    currentQuestionIndex = 0;
    userAnswers = new Array(quizQuestions.length).fill(null);
    score = 0;
    elapsedTime = 0;
    updateScore();
    updateTimer();
    showScreen("welcome");
}

// Show specific screen
function showScreen(screenName) {
    document.querySelectorAll(".screen").forEach(screen => {
        screen.classList.remove("active");
    });
    
    switch(screenName) {
        case "welcome":
            welcomeScreen.classList.add("active");
            break;
        case "quiz":
            quizScreen.classList.add("active");
            break;
        case "results":
            resultsScreen.classList.add("active");
            break;
    }
}

// Start the quiz
function startQuiz() {
    showScreen("quiz");
    loadQuestion();
}

// Load current question
function loadQuestion() {
    const question = quizQuestions[currentQuestionIndex];
    
    // Update question info
    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
    questionProgress.textContent = `Progress: ${Math.round(((currentQuestionIndex + 1) / quizQuestions.length) * 100)}%`;
    questionText.textContent = question.question;
    
    // Load options
    const options = optionsContainer.querySelectorAll(".option");
    options.forEach((option, index) => {
        const radio = option.querySelector("input[type=\"radio\"]");
        const optionText = option.querySelector(".option-text");
        
        radio.checked = userAnswers[currentQuestionIndex] === index;
        optionText.textContent = question.options[index];
    });
    
    // Update navigation buttons
    prevBtn.disabled = currentQuestionIndex === 0;
    
    if (currentQuestionIndex === quizQuestions.length - 1) {
        nextBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
    } else {
        nextBtn.style.display = "inline-block";
        submitBtn.style.display = "none";
    }
}

// Handle option selection
function selectOption(optionIndex) {
    userAnswers[currentQuestionIndex] = optionIndex;
    
    // Update radio buttons
    const radios = optionsContainer.querySelectorAll("input[type=\"radio\"]");
    radios.forEach((radio, index) => {
        radio.checked = index === optionIndex;
    });
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

// Calculate and display results
function calculateResults() {
    score = 0;
    
    userAnswers.forEach((answer, index) => {
        if (answer === quizQuestions[index].correct) {
            score++;
        }
    });
    
    const percentage = Math.round((score / quizQuestions.length) * 100);
    
    // Update results display
    document.getElementById("final-score").textContent = `${score}/${quizQuestions.length}`;
    document.getElementById("percentage").textContent = `${percentage}%`;
    document.getElementById("time-taken").textContent = formatTime(elapsedTime);
    
    // Generate question review
    generateQuestionReview();
    
    // Stop timer if running
    if (isTimerRunning) {
        stopTimer();
    }
}

// Generate detailed question review
function generateQuestionReview() {
    const reviewContainer = document.getElementById("question-review");
    reviewContainer.innerHTML = "";
    
    quizQuestions.forEach((question, index) => {
        const reviewItem = document.createElement("div");
        reviewItem.className = `question-review-item ${userAnswers[index] === question.correct ? "correct" : ""}`;
        
        const questionDiv = document.createElement("div");
        questionDiv.className = "review-question";
        questionDiv.textContent = `${index + 1}. ${question.question}`;
        
        const answerDiv = document.createElement("div");
        answerDiv.className = `review-answer ${userAnswers[index] === question.correct ? "correct" : "incorrect"}`;
        
        if (userAnswers[index] === null) {
            answerDiv.textContent = "Not answered";
        } else if (userAnswers[index] === question.correct) {
            answerDiv.textContent = `✓ Correct: ${question.options[question.correct]}`;
        } else {
            answerDiv.innerHTML = `✗ Your answer: ${question.options[userAnswers[index]]}<br>✓ Correct answer: ${question.options[question.correct]}`;
        }
        
        reviewItem.appendChild(questionDiv);
        reviewItem.appendChild(answerDiv);
        reviewContainer.appendChild(reviewItem);
    });
}

// Submit quiz
function submitQuiz() {
    calculateResults();
    showScreen("results");
}

// Restart quiz
function restartQuiz() {
    resetTimer();
    initializeQuiz();
}

// Timer functions
function startTimer() {
    if (!isTimerRunning) {
        startTime = Date.now() - elapsedTime;
        isTimerRunning = true;
        
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateTimer();
        }, 1000);
        
        startTimerBtn.disabled = true;
        stopTimerBtn.disabled = false;
    }
}

function stopTimer() {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        startTimerBtn.disabled = false;
        stopTimerBtn.disabled = true;
    }
}

function resetTimer() {
    stopTimer();
    elapsedTime = 0;
    updateTimer();
}

function updateTimer() {
    timerDisplay.textContent = formatTime(elapsedTime);
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function updateScore() {
    const answeredQuestions = userAnswers.filter(answer => answer !== null).length;
    scoreDisplay.textContent = `${score}/${answeredQuestions}`;
}

// Event listeners
document.addEventListener("DOMContentLoaded", function() {
    // Initialize quiz
    initializeQuiz();
    
    // Start quiz button
    startQuizBtn.addEventListener("click", startQuiz);
    
    // Navigation buttons
    prevBtn.addEventListener("click", previousQuestion);
    nextBtn.addEventListener("click", nextQuestion);
    submitBtn.addEventListener("click", submitQuiz);
    restartBtn.addEventListener("click", restartQuiz);
    
    // Timer buttons
    startTimerBtn.addEventListener("click", startTimer);
    stopTimerBtn.addEventListener("click", stopTimer);
    resetTimerBtn.addEventListener("click", resetTimer);
    
    // Option selection
    optionsContainer.addEventListener("click", function(e) {
        const option = e.target.closest(".option");
        if (option) {
            const optionIndex = Array.from(optionsContainer.children).indexOf(option);
            selectOption(optionIndex);
        }
    });
    
    // Keyboard navigation
    document.addEventListener("keydown", function(e) {
        if (quizScreen.classList.contains("active")) {
            switch(e.key) {
                case "ArrowLeft":
                    if (!prevBtn.disabled) previousQuestion();
                    break;
                case "ArrowRight":
                    if (currentQuestionIndex < quizQuestions.length - 1) {
                        nextQuestion();
                    } else if (submitBtn.style.display !== "none") {
                        submitQuiz();
                    }
                    break;
                case "1":
                case "2":
                case "3":
                case "4":
                    const optionIndex = parseInt(e.key) - 1;
                    if (optionIndex < 4) selectOption(optionIndex);
                    break;
            }
        }
    });
});

// Add smooth transitions and animations
function addLoadingAnimation() {
    const container = document.querySelector(".container");
    container.style.opacity = "0";
    container.style.transform = "translateY(20px)";
    
    setTimeout(() => {
        container.style.transition = "all 0.5s ease";
        container.style.opacity = "1";
        container.style.transform = "translateY(0)";
    }, 100);
}

// Call loading animation when page loads
window.addEventListener("load", addLoadingAnimation);

