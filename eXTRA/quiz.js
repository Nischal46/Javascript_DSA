const {log} = require('console');
const readlinesync = require('readline-sync');

const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
};

const questionSet = [
    {
        question: "Const variable is mutable.",
        option: ['correct', 'false', 'both true', 'both false'],
        correct: 2,
        point: 10
    },

    {
        question: "Which one is javaScript framework?",
        option: ['Angular', 'Vue', 'React', 'Both a and b'],
        correct: 4,
        point: 10
    },

    {
        question: "Prototype inheritance is a concept of which language",
        option: ['javaScript', 'python', 'Java', 'All of them'],
        correct: 1,
        point: 10
    },

    {
        question: "Hoisting is true if",
        option: ['if function call is before declare', 'function declare and call', 'both are true', 'both are false'],
        correct: 1,
        point: 10
    },

    {
        question: "which is the react framework?",
        option: ['Next', 'Remix', 'express', 'both a and b'],
        correct: 4,
        point: 10
    }
]

log(`

********************QUIZ GAME START***********************

`);


function DisplayAnswer(answerlist){
    log(`${colors.blue}Answer Option${colors.reset}`)
    for(let i = 0; i <=answerlist.length - 1; i++){
        log(`
        ${i+1}) ${answerlist[i]}
        `)
    }
}

function QuestionGenerater(arrayQuestion, questionNo){

    log(`${questionNo}) ${arrayQuestion.question}`);
    DisplayAnswer(arrayQuestion.option)
    const answer = +readlinesync.question('Choose a correct option: ');

    if(answer === arrayQuestion.correct){
        log(`${colors.green}Correct Answer${colors.reset}`);
    }
    else{
        log(`${colors.red}Wrong Answer${colors.reset}`);
    }
}

for(let i = 0; i <= questionSet.length - 1; i++){
    QuestionGenerater(questionSet[i], i+1);
}