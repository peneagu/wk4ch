const progressBar = document.getElementsByClassName ('progressBar')[0]
setInterval(() => {
    const computedStyle = getComputedStyle(progressBar)
    const width = parseFloat(computedStyle.getPropertyValue) ('--width')) || 0
    progressBar.style.setProperty('--width', width + .1)
} ,5)

const question = document.querySelector('#question')
const choices = Array.from(document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion ={}
let acceptingAnswers= true
let score = 0
let questionCounter = 0
let available questions = []

let questions = [
    {
        question: 'what is 2+2?'
        choice1: '2',
        choice2: '4',
        choice3: '7',
        choice4: '8',
        answer: 2,
    }

    {
        question: 'kjadhfgkdasjgfkjgdfkjhg is 2+2?'
        choice1: '2',
        choice2: '4',
        choice3: '7',
        choice4: '8',
        answer: 2,
    }

    {
        question: 'what ghfghnjgfhjfhgj 2+2?'
        choice1: '2',
        choice2: '4',
        choice3: '7',
        choice4: '8',
        answer: 2,
    }

    {
        question: 'what is 2+dsfsdfsdfsdfsdf?'
        choice1: '2',
        choice2: '4',
        choice3: '7',
        choice4: '8',
        answer: 2,
    }
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