
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const instructions = document.getElementById('instructions')

let nextQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex ++
    setNextQuestion()
})

function startGame() {
    console.log('started')
    startButton.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    nextQuestion = questions.sort(() => currentQuestionIndex++)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(nextQuestion[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    });
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hidden')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}
function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (questions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hidden')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hidden')

    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('incorrect')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('incorrect')
}

const questions = [
    {
        question: 'tea',
        answers: [
            {text:'these', correct: true },
            {text:'like', correct: false }
        ]
    },
    {
        question: 'these',
        answers: [
            {text:'this', correct:false},
            {text:'meat', correct:true}
        ]
    },
    {
        question: 'these',
        answers: [
            {text:'this', correct:false},
            {text:'meat', correct:true}
        ]
    },
    {
        question: 'these',
        answers: [
            {text:'this', correct:false},
            {text:'meat', correct:true}
        ]
    },
    {
        question: 'these',
        answers: [
            {text:'this', correct:false},
            {text:'meat', correct:true}
        ]
    }
]