const startButton = document.getElementById('startBtn')
const nextButton = document.getElementById('nextBtn')
const questionContainerElement = document.getElementById ('questionContainer')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById ('answer-buttons')
var timer = document.querySelector(".timer");




function startTimer() {
    // Initiate timerClock function once per second
    quizTime = setInterval(timerClock, 1000);
}

function stopTimer() {
    clearInterval(quizTime);
}

function timerClock() {
    timeLeft--;
    timer.textContent = "Timer: " + timeLeft;
    if (timeLeft <= 0) {
        // clearInterval so it doesn't go into negatives
        clearInterval(quizTime);
        timer.textContent = "Timer: 0";
        gameOver();
    }
}


let shuffledQuestions, currentQuestionIndex

 startButton.addEventListener('click', startGame, () => {
    currentQuestionIndex++
    NextQuestion ()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = question.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    NextQuestion()
}


function NextQuestion () {
    resetState ()
    showQuestions(shuffledQuestions[currentQuestionIndex])
}

function showQuestions(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    startButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        startButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}


function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const question = [
    {
        question: 'Where is the correct place to insert a JavaScript?',
        answers: [
            { text: 'Both the <head> section and the <body> section are correct  ', correct: true },
            { text: 'The <head> section', correct: false },
            { text: 'The <body> section', correct: false },

        ]
    },

    {
        question: 'How do you write "Hello World" in an alert box?',
        answers: [
            { text: 'alertBox("Hello World");', correct: false },
            { text: 'msgBox("Hello World");', correct: false },
            { text: 'alert("Hello World");', correct: true },
            { text: 'msg("Hello World");', correct: false },

        ]
    },

    {
        question: 'Which event occurs when the user clicks on an HTML element?',
        answers: [
            { text: 'onmouseover', correct: false },
            { text: 'onmouseclick', correct: false },
            { text: 'onchange', correct: false },
            { text: 'onclick', correct: true },

        ]
    },

    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        answers: [
            { text: 'if i <> 5', correct: false },
            { text: 'if (i != 5)', correct: true },
            { text: 'if (i <> 5)', correct: false },
            { text: 'if i =! 5 then', correct: false },

        ]
    },

    {
        question: 'What is the correct way to write a JavaScript array?',
        answers: [
            { text: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', correct: false },
            { text: 'var colors = ["red", "green", "blue"]', correct: true },
            { text: 'var colors = "red", "green", "blue"', correct: false },
            { text: 'var colors = (1:"red", 2:"green", 3:"blue")', correct: false },

        ]
    },

]

