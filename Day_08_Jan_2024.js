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

let player1win = 0;
let player2win = 0;
log(player1win, player2win);
log(`${colors.green}Scissor${colors.reset}-${colors.blue}Paper${colors.reset}-${colors.red}Rock${colors.reset}`);

for (let i = 0; i<3; i++){

log('****************************************************')
log(`                                             count: ${i+1} | ${colors.red}Player 1 win : ${player1win}${colors.reset} | ${colors.green}Player 2 win: ${player2win}${colors.reset}`)
// const userinput = +input.question("Press Enter to start: ")

function GenerateOutcomes(player){
    let outcomesEmoji = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
    let result;

    if(outcomesEmoji === 'scissor') result = `${outcomesEmoji} 🤞`;

    else if(outcomesEmoji === 'rock') result = `${outcomesEmoji} 👊`;

    else if(outcomesEmoji === 'paper') result = `${outcomesEmoji} ✋`;

    return result;

}

function Winner(player){
    if(player === 'player1') player1win+=1;
    else if(player === 'player2') player2win+=1;
    log(`${player} win`);
}

function checkWinningCondition() {

    
    // let player2 = GenerateOutcomes('player 2'); 
    log(`
    --> Press 1 for rock 👊
    --> Press 2 for scissor 🤞
    --> Press 3 for paper ✋
    `)
    const userchoice = +input.question(`${colors.blue}Enter your choice: ${colors.reset}`)
    log(`
    
    `)

    let player;

    switch(userchoice){
        case 1:
            player = "rock 👊";
            break;

        case 2:
            player = "scissor 🤞";
            break;

        case 3:
            player = 'paper ✋';
            break;

        default:
            log('Invalid input');
            break;
    }

    let cpu = GenerateOutcomes('cpu');
    log('Player 1: ', cpu);

    log('Player 2: ', player);

    log(`
    
    `)

    if(cpu.includes('rock') && player.includes('scissor')) return Winner('cpu');

    else if(cpu.includes('scissor') && player.includes('paper')) return Winner('cpu');

    else if(cpu.includes('paper') && player.includes('rock')) return Winner('cpu');

    else if(cpu.includes('scissor') && player.includes('rock')) return Winner('player');

    else if(cpu.includes('paper') && player.includes('scissor')) return Winner('player');

    else if(cpu.includes('rock') && player.includes('paper')) return Winner('player');

    else if(cpu.includes('rock') && player.includes('rock')) return log('Draw');

    else if(cpu.includes('scissor') && player.includes('scissor')) return log('Draw');

    else if(cpu.includes('paper') && player.includes('paper')) return log('Draw');

}


checkWinningCondition();

log(`

`)

}

