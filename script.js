
const startButton = document.getElementById('start-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let nextQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    nextQuestion = questions.sort(() => currentQuestionIndex++)
    currentQuestionIndex = 0
    setNextQuestion()
}

function setNextQuestion() {
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

function selectAnswer() {

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
    }
]