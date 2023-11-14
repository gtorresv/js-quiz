var startScreen = document.getElementById('start-screen');
var quiz = document.getElementById('question-container');
var optionsContainer = document.getElementById('options-container');
var endScreen = document.getElementById('end-screen');
var startButton = document.getElementById('start-btn');
var questionText = document.getElementById('question');
var finalScoreText = document.getElementById('final-score');
var initialsInput = document.getElementById('initials');
var submitScoreButton = document.getElementById('submit-score');

// Questions and answers 

var questions = [
    {
        question: "Which of the following is a correct way to comment in JavaScript",
        options: [
            "A. `/* comment */`",
            "B. `// comment`",
            "C. `<!-- comment -->`",
            "D. `# comment`"
        ],
        correct: "B. `// comment`"
    },
    {
        question: "Which of the following is not a valid data type in JavaScript?",
        options: [
            "A. String",
            "B. Boolean",
            "C. Number",
            "D. Character"
        ],
        correct: "D. Character"
    },
    {
        question: "What does the this keyword refer to in JavaScript?",
        options: [
            "A. The current function's prototype",
            "B. The global object",
            "C. The object that called the current function",
            "D. The parent function's context"
        ],
        correct: "C. The object that called the current function"
    },
    {
        question: "What does the querySelector method do in JavaScript?",
        options: [
            "A. Selects the first element with a given class",
            "B. Selects the last element with a given class",
            "C. Selects all elements with a given tag name",
            "D. Selects the first element with a given ID"
        ],
        correct: "A. Selects the first element with a given class"
    },
    {
        question: "What does the === operator do in JavaScript?",
        options: [
            "A. Checks for equality, including type",
            "B. Assigns a value",
            "C. Checks for equality, excluding type",
            "D. Concatenates two strings"
        ],
        correct: "A. Checks for equality, including type"
    }
]