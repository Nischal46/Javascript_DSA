// Scissor Paper Rock
const {log} = require('console');
const input = require('readline-sync');

let possibleOutcomes = ['scissor', 'paper', 'rock'];

const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
};

log(`

`);

for (let i = 0; i<=3; i++){

function GameStart(){}

log(`${colors.green}Scissor${colors.reset}-${colors.blue}Paper${colors.reset}-${colors.red}Rock${colors.reset}`);
log('****************************************************')

const userinput = +input.question("Press Enter to start: ")

function GenerateOutcomes(player){
    let outcomesEmoji = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
    let result;

    if(outcomesEmoji === 'scissor') result = `${outcomesEmoji} 🤞`;

    else if(outcomesEmoji === 'rock') result = `${outcomesEmoji} 👊`;

    else if(outcomesEmoji === 'paper') result = `${outcomesEmoji} ✋`;

    return result;

}

function Winner(player){
    log(`${player} win`);
}

function checkWinningCondition() {

    let player1 = GenerateOutcomes('player 1');
    log('Player 1: ', player1);
    let player2 = GenerateOutcomes('player 2'); 
    log('Player 2: ', player2);

    if(player1.includes('rock') && player2.includes('scissor')) return Winner('player 1');

    else if(player1.includes('scissor') && player2.includes('paper')) return Winner('player 1');

    else if(player1.includes('paper') && player2.includes('rock')) return Winner('player 1');

    else if(player1.includes('scissor') && player2.includes('rock')) return Winner('player 2');

    else if(player1.includes('paper') && player2.includes('scissor')) return Winner('player 2');

    else if(player1.includes('rock') && player2.includes('paper')) return Winner('player 2');

    else if(player1.includes('rock') && player2.includes('rock')) return log('Draw');

    else if(player1.includes('scissor') && player2.includes('scissor')) return log('Draw');

    else if(player1.includes('paper') && player2.includes('paper')) return log('Draw');

}


checkWinningCondition();

log(`

`)

}

