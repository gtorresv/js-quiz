var startScreen = document.getElementById('start-screen');
var quiz = document.getElementById('question-container');
var optionsContainer = document.getElementById('options-container');
var endScreen = document.getElementById('end-screen');
var startButton = document.getElementById('start-btn');
var questionText = document.getElementById('question');
var finalScoreText = document.getElementById('final-score');
var initialsInput = document.getElementById('initials');
var submitScoreButton = document.getElementById('submit-score');
var timerDisplay = document.getElementById('timer')

// Quiz number variables for timer, score and questiones  
var currentQuestionIndex = 0;
var timer;
var timerCount = 75;
var score = 0;

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
    },
];

// Event listeners for buttons 
startButton.addEventListener('click', startQuiz);
submitScoreButton.addEventListener('click', saveScore);

// Functions
function startQuiz() {
    startScreen.classList.add('hide');
    quiz.classList.remove('hide');
    loadQuestion();
    startTimer();
}

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
  
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add("question-btn");
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(optionIndex) {
    const currentQuestion = questions[currentQuestionIndex];
  
    if (currentQuestion.options[optionIndex] === currentQuestion.correct) {
        score++;
    } else {
        timerCount -= 5; // Deduct 5 seconds if wrong answer
    }
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}  
  
function startTimer() {
    timer = setInterval(() => {
        timerCount--;
    
        if (timerCount <= 0) {
            endQuiz();
        }
        timerDisplay.textContent = ("Time: " + timerCount);
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    quiz.classList.add('hide');
    endScreen.classList.remove('hide');
    finalScoreText.textContent = score;
    timerDisplay.textContent = "Time: 0";
}
// TODO: Change how the score displays and save to local storage  
function saveScore() {
    const initials = initialsInput.value.trim();
  
    if (initials !== '') {
      // Save the score and initials
        alert(`Score saved: ${score} with initials ${initials}`);
    } else {
        alert('Please enter your initials.');
    }
}
