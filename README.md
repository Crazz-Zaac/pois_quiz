# MCQ Quiz - GitHub Pages

A simple, interactive Multiple Choice Question (MCQ) quiz with timer functionality, designed to be hosted on GitHub Pages.

## Features

- **Interactive Quiz Interface**: Clean, modern design with smooth animations
- **Timer Functionality**: Optional timer with start, stop, and reset controls
- **Progress Tracking**: Real-time progress indicator and score display
- **Question Navigation**: Navigate between questions with Previous/Next buttons
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Results Summary**: Detailed results with question review and performance metrics
- **Keyboard Support**: Navigate using arrow keys and number keys (1-4 for options)

## Files Structure

```
mcq-quiz/
├── index.html      # Main HTML structure
├── style.css       # CSS styling and animations
├── script.js       # JavaScript logic and quiz data
└── README.md       # This file
```

## Quiz Questions

The quiz includes 10 questions covering:
- HTML fundamentals
- CSS properties and styling
- JavaScript basics
- Web development concepts

## How to Deploy on GitHub Pages

1. **Create a new repository** on GitHub
2. **Upload all files** (index.html, style.css, script.js) to the repository
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll down to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Click "Save"
4. **Access your quiz** at: `https://yourusername.github.io/repository-name`

## Customization

### Adding New Questions

Edit the `quizQuestions` array in `script.js`:

```javascript
const quizData = [
    {
        "question": "What are valid sources of a message flow?",
        "options": [
            "Send task",
            "Multiple end event",
            "Multiple start event",
            "Error end event"
        ],
        "correct": [0, 1],
        "type": "multiple"
    },
    // Add more questions...
];
```

### Styling Customization

Modify `styles.css` to change:
- Color scheme (update CSS custom properties)
- Typography (font families and sizes)
- Layout and spacing
- Animation effects

### Timer Settings

The timer starts at 00:00 and counts up. To modify timer behavior, edit the timer functions in `script.js`.

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Local Testing

To test locally, simply open `home.html` in a web browser. All files use relative paths and will work without a web server.

## License

This project is open source and available under the MIT License.

