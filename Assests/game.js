const startButton = document.getElementById('startBtn')
const nextButton = document.getElementById('nextBtn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById ('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click' , startGame)
nextButton.addEventListener('click', () => {
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

function showQuestion(question){
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
    nextButton.classList.add('hide')
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
        nextButton.classList.remove('hide')
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
        question: 'How to write an IF statement in JavaScript?',
        answers: [
            { text: 'if i = 5', correct: false },
            { text: 'if i = 5 then', correct: false },
            { text: 'if i == 5 then', correct: false },
            { text: 'if (i == 5)', correct: true },

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