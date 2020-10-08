
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainer = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const instructions = document.getElementById('instructions')
const endofgamePopup = document.getElementById('endofgame')

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
    endofgamePopup.classList.add('hidden')
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
        endofgamePopup.classList.remove('hidden')
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
        question: 'meat',
        answers: [
            {text:'friend', correct:false},
            {text:'meet', correct:true}
        ]
    },
    {
        question: 'meet',
        answers: [
            {text:'complete', correct:true},
            {text:'main', correct:false}
        ]
    },
    {
        question: 'complete',
        answers: [
            {text:'friend', correct:false},
            {text:'need', correct:true},
            {text:'hear', correct:false}
        ]
    },
    {
        question: 'need',
        answers: [
            {text:'eat', correct:true},
            {text:'year', correct:false},
            {text:'fit', correct:false},
        ]
    },
    {
        question: 'eat',
        answers: [
            {text:'sheep', correct:true},
            {text:'friend', correct:false},
            {text:'it', correct:false}
        ]
    },
    {
        question: 'sheep',
        answers: [
            {text:'this', correct:false},
            {text:'scene', correct:true},
            {text:'ship', correct:false}
        ]
    },
    {
        question: 'scene',
        answers: [
            {text:'like', correct:false},
            {text:'TV', correct:true}
        ]
    },
    {
        question: 'meet',
        answers: [
            {text:'complete', correct:true},
            {text:'main', correct:false}
        ]
    },
    {
        question: 'TV',
        answers: [
            {text:'ship', correct:false},
            {text:'feel', correct:true}
        ]
    },
    {
        question: 'feel',
        answers: [
            {text:'fill', correct:false},
            {text:'seat', correct:true}
        ]
    },
    {
        question: 'seat',
        answers: [
            {text:'read', correct:true},
            {text:'sit', correct:false}
        ]
    },
    {
        question: 'read',
        answers: [
            {text:'fill', correct:false},
            {text:'please', correct:true},
            {text:'dead', correct:false}
        ]
    },
    {
        question: 'please',
        answers: [
            {text:'night', correct:false},
            {text:'right', correct:false},
            {text:'street', correct:true}
        ]
    },
    {
        question: 'street',
        answers: [
            {text:'dead', correct:false},
            {text:'me', correct:true},
            {text:'break', correct:false}
        ]
    },
    {
        question: 'me',
        answers: [
            {text:'sea', correct:true},
            {text:'beer', correct:false},
            {text:'fight', correct:false}
        ]
    },
    {
        question: 'sea',
        answers: [
            {text:'dead', correct:false},
            {text:'cheap', correct:true},
            {text:'bear', correct:false}
        ]
    },
    {
        question: 'cheap',
        answers: [
            {text:'feet', correct:true},
            {text:'sit', correct:false},
            {text:'beer', correct:false},
        ]
    },{
        question: 'feet',
        answers: [
            {text:'bear', correct:false},
            {text:'bean', correct:true},
            {text:'fight', correct:false}
        ]
    },{
        question: 'bean',
        answers: [
            {text:'teach', correct:true},
            {text:'beer', correct:false},
            {text:'bear', correct:false}
        ]
    },{
        question: 'teach',
        answers: [
            {text:'bear', correct:false},
            {text:'tree', correct:true},
            {text:'fight', correct:false}
        ]
    },{
        question: 'tree',
        answers: [
            {text:'east', correct:true},
            {text:'beer', correct:false},
            {text:'nine', correct:false}
        ]
    },{
        question: 'east',
        answers: [
            {text:'nine', correct:false},
            {text:'meal', correct:true}
        ]
    },
]