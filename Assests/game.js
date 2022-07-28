const progressBar = document.getElementsByClassName ('progressBar')[0]
setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue) ('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
});

const question = document.querySelector('#question')
const choices = Array.from(document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion ={}
let acceptingAnswers= true
let score = 0
let questionCounter = 0
let question: any

const questions = [
    {
        question: " I have a pulse but no heart, a brain but can’t think and while I can sleep, I usually don’t stay asleep for long? What am I?",
        choice1: 'Major Axis',
        choice2: 'Mainframe',
        choice3: 'A configuration file',
        choice4: 'A data structure',
        answer: 2,
    },

    {
        question: 'I’m a language for everything yet I have no real identity of my own. Good luck trying to compile me. What am I?',
        choice1: 'Pseudocode',
        choice2: 'JavaScript',
        choice3: 'MySql',
        choice4: 'CSS',
        answer: 1,
    },

    {
        question: 'The more you code, the more of me there is. I may be gone for now but you can’t get rid of me forever. What am I?',
        choice1: 'an update on your machine',
        choice2: 'an object',
        choice3: 'Pseudocode',
        choice4: 'a Bug',
        answer: 4,
    },

    {
        question: 'I’m a shape shifter. You could call me someone who could possess multiple qualities but only has one set of them at any given time. What am I?',
        choice1: 'A red-black tree2',
        choice2: 'A server',
        choice3: 'Polymorphism',
        choice4: 'A product/project manager',
        answer: 3,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 4

startingGame - () => {
    questionCounter = 0
    score = 0
    availableQuestoions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestoions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

    const questionsIndex = Math.floot(math.random() * availableQuestoions.length)
    currentQuestion = availableQuestoions[questionsIndex]
    question.innerText = currentQuestion

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion ['choice' + number]
    })
    availableQuestoions.splice(questionsIndex, 1)

    acceptingAnswers = true 
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selected == currentQuestion.answer ? 'correct' :
        'incorrect'

        if(classToApply ==='correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout (() => {
        selectedChoice.parentElement.classList.remoce(classToApply)
        getNewQuestion()

    }, 100)
    })
})