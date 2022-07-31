// progress bar start

const upload = () => {
    const myProgress = document.querySelector('#myProgress')
    myProgress.setAttribute('id', 'play-animation')
}

// progress bar end

// // timer start
timeStart.innerHTML = setTime;
function countdown (){
   const countDown = setInterval(()=>{
        setTime--,
        timeStart.innerHTML = setTime;
        if(setTime < 0 || setTime <1){
            clearInterval(countDown);
        }
    },1000); 
}
// // timer end

const question = document.querySelector('#question');
const timer = document.querySelector('.timer');
const choices = Array.from(document.querySelector('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');

var currentQuestion = {}
var acceptingAnswers= true
var score = 0
var questionCounter = 0
var availableQuestion = []

var questions = [
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

var score = 0;
var questions = 4

function startGame () {
    questionCounter = 0
    score = 0
    startBtn,classList.add("hide")
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.style.width = '${(questionCounter/MAX_QUESTIONS) * 100}%'

    const questionsIndex = Math.floor(math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion ['choice' + number]
    })
    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true 
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply ==='correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout (() => {
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()

    }, 1000)
    })
})










