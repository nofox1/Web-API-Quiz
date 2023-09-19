var questions = [
{
        question : 'Who won the super bowl last year?',
        choicea: 'Browns',
        choiceb: 'Chargers',
        choicec: 'Eagles',
        choiced: 'Chiefs',
        correct: 'd'
},
{
        question : 'How tall is mount everest',
        choicea: '29,032 feet',
        choiceb: '15,653 feet',
        choicec: '23,645 feet',
        choiced: '11,000 feet',
        correct: 'a'
},
{
        question: 'When did D-Day happen?',
        choicea: 'June 5, 1944',
        choiceb: 'June 6, 1944',
        choicec: 'July 6, 1944',
        choiced: 'July 5, 1944',
        correct: 'b' 
},
{
        question: 'What was the most used computer language in 2022?',
        choicea: 'Python',
        choiceb: 'PHP',
        choicec: 'Javascript',
        choiced: 'IaC',
        correct: 'c'
},
{
        question: 'How many planets are in our solar system?',
        choicea: '5 planets',
        choiceb: '6 planets',
        choicec: '7 planets',
        choiced: '8 planets',
        correct: 'd'
}
];

var startEl = document.querySelector('#start');
var questionsEl = document.querySelector('#questions');
var answersEl = document.querySelector('#choices'); 
var timerEl = document.querySelector('#time');
var initialsEl = document.querySelector('#initials');

var time = questions.length * 15;
var timerid;


var lastQuestionIndex = questions.length - 1;
var runningQuestionIndex = 0;

function startquiz(){
        var quizstart = document.getElementById('start-btn');
        quizstart.setAttribute('class','hide');
        
        questionsEl.removeAttribute('class');

        timerid =setInterval(clocktick, 1000);

        timerEl.textContent = time;

        createQuestion();
}

function createQuestion(){
    var q = questions[runningQuestionIndex];
    question.innerHtml = '<p>' + q.question + '</p>';
    choicea.innerHtml = q.choicea;
    choiceb.innerHtml = q.choiceb;
    choicec.innerHtml = q.choicec;
    choiced.innerHtml = q.choiced;
}


