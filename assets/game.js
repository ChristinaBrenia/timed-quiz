//Variables   
   const question = document.querySelector('#question');
    const choices = Array.from(document.querySelectorAll('.choice-text'));
    const progressText = document.querySelector('#progressText');
    const scoreText = document.querySelector('#score');
    const progressBarFull = document.querySelector('#progressBarFull');

    let currentQuestion = {}
    let acceptingAnswers = true
    let score = 0
    let questionCounter = 0 
    let availableQuestions = []

//Questions array

//Question 1
let questions = [
    {
        question: 'What is 2+2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '6',
        answer: 4,

    },

//Question 2

    {
        question: 'What is 5+2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '7',
        answer: 2,

    },
//Question 3

    {
        question: 'What is 9+2?',
        choice1: '2',
        choice2: '4',
        choice3: '21',
        choice4: '11',
        answer: 4,

    },

//Question 4

    {
        question: 'What is 6+2?',
        choice1: '2',
        choice2: '4',
        choice3: '8',
        choice4: '18',
        answer: 3,

    },
//Question 5

    {
        question: 'What is 23+2?',
        choice1: '25',
        choice2: '4',
        choice3: '24',
        choice4: '6',
        answer: 1,

    }
]

// Fixed score and question
const SCORE_POINTS = 100
const MAX_Question = 4

//Start game function - start score and question at 0 
startGame = () => {
    questionCounter =0
    score = 0
    //spread opperator to retrieve question value from array
    availableQuestions = [...questions]
    getNewQuestion()
}
//Function to get question
getNewQuestion = () => {
    if(availableQuestions.length ===0 || questionsCounter > MAX_Questions) {
        localStorage.setItem('mostRecentScore',score)
        return window.location.assign('/end.html')
    }
    //Calculates question on and correspond with percentage completed
    questionCounter++
    progressText.innerText = 'Question ${questionCounter} of ${MAX_QUESTIONS}'
    progressBarFull.getElementsByClassName.width = '${ (questionCounter/MAX_QUESTIONS) *100}%'

    const questionsIndex = Math.floor(Math.random()*availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion ['choice'+number]
    })

    availableQuestions.splice(quetionsIndex,1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    const selectedChoice = e.target
    const selectedAnswer = selectedChoice.dataset['number']

    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct':
    'incorrect'

    if(classToApply === 'correct') {
        incrementScore(SCORE_POINTS)
    }
    selectedChoice.parentElement.classList.add(classToApply)

    setTimeout(()=>{
        selectedChoice.parentElement.classList.remove(classToApply)
        getNewQuestion()
    },1000)
    })
})

