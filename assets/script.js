var questions = [
  {
    question: "Who won the super bowl last year?",
    answers: [
      { text: "Browns", correct: false },
      { text: "Chargers", correct: false },
      { text: "Eagles", correct: false },
      { text: "Chiefs", correct: true },
    ],
  },
  {
    question: "How tall is mount everest?",
    answers: [
      { text: "29,032 feet", correct: true },
      { text: "15,653 feet", correct: false },
      { text: "23,645 feet", correct: false },
      { text: "11,000 feet", correct: false },
    ],
  },
  {
    question: "When did D-Day happen?",
    answers: [
      { text: "June 5, 1944", correct: false },
      { text: "June 6, 1944", correct: true },
      { text: "July 5, 1944", correct: false },
      { text: "July 6, 1944", correct: false },
    ],
  },
  {
    question: "What was the most used computer language in 2022?",
    answers: [
      { text: "Python", correct: false },
      { text: "PHP", correct: false },
      { text: "Javascript", correct: true },
      { text: "IaC", correct: false },
    ],
  },
  {
    question: "How many planets are in our solar system?",
    answers: [
      { text: "5 planets", correct: false },
      { text: "6 planets", correct: false },
      { text: "7 planets", correct: false },
      { text: "8 planets", correct: true },
    ],
  },
];

var startEl = document.getElementById("start-btn");
var nextEl = document.getElementById("next-btn");
var questionsEl = document.getElementById("question");
var answersbuttonsEl = document.getElementsByClassName("answers");
var titleEl = document.getElementById("quiz-head");
var timerEl = document.getElementById("time")

var randomQuestions, presentQuestionIndex;
var timer;
var timerCount = 10;
var questionscorrect = 0;

nextEl.addEventListener("click", () => {
  presentQuestionIndex++;
  createQuestion();
});

function startquiz() {
  document.getElementById("start-btn").classList.add("hide");

  titleEl.classList.add("hide");

  randomQuestions = questions.sort(() => Math.random() - 0.5);
  presentQuestionIndex = 0;

  document.getElementById("quiz-content").style.display = "block";
  nextEl.classList.add("hide");

  createQuestion();
  setTimer();
  
}

function createQuestion() {
  resetList();
  newQuestion(randomQuestions[presentQuestionIndex]);
}

function newQuestion(question) {
  questionsEl.innerText = question.question;
  for (let i = 0; i < question.answers.length; i++) {
    answersbuttonsEl[i].innerText = question.answers[i].text
    answersbuttonsEl[i].dataset.correct = question.answers[i].correct;
    answersbuttonsEl[i].addEventListener("click", selectAnswer);
  }
}

function selectAnswer(e) {
  if (e.target.dataset.correct == 'true'){
    questionscorrect++;
  }
  Array.from(answersbuttonsEl).forEach((button) => {
    setStatus(button, button.dataset.correct);
  });
  if (randomQuestions.length != presentQuestionIndex + 1) {
    nextEl.classList.remove("class", "hide");
  } else {
    startEl.innerText = "Restart";
    startEl.classList.remove("class", "hide");
    document.getElementById('start')
  } 
}

function setStatus(element, correct) {
  clearStatus(element);
  if (correct == 'true') {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatus(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function resetList() {
  nextEl.classList.add("hide");
  Array.from(answersbuttonsEl).forEach((button) => {
    clearStatus(button);
  });
}
function setTimer(){
  timer = setInterval(function() {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount === 0){
        startEl.innerText = "Restart";
        startEl.classList.remove("class", "hide");
    }if (timerCount === 0){
        nextEl.classList.add('hide')
        clearInterval(timer)
    }
}, 1000);
}
function end (){
  

    
    
    
}