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

    function Winner(player){
        if(player === 'cpu')  player1win++;
        else if(player === 'player')  player2win++;
        log(`${colors.green}${player} wins ! ${colors.reset}`);
    }
    
    function Draw(){
        log(`${colors.red}It's a Draw !${colors.reset}`)
    }
    

    log('****************************************************')
    log(`                                             count: ${i+1} | ${colors.red}CPU win : ${player1win}${colors.reset} | ${colors.green}Player win: ${player2win}${colors.reset}`)
// const userinput = +input.question("Press Enter to start: ")

    function GenerateOutcomes(player){
        let outcomesEmoji = possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)];
        let result;

        if(outcomesEmoji === 'scissor') result = `${outcomesEmoji} 🤞`;

        else if(outcomesEmoji === 'rock') result = `${outcomesEmoji} 👊`;

        else if(outcomesEmoji === 'paper') result = `${outcomesEmoji} ✋`;

        return result;

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
        log('CPU: ', cpu);

        log('Player: ', player);

        log(`
        
        `)

        if(cpu.includes('rock') && player.includes('scissor')) return Winner('cpu');

        else if(cpu.includes('scissor') && player.includes('paper')) return Winner('cpu');

        else if(cpu.includes('paper') && player.includes('rock')) return Winner('cpu');

        else if(cpu.includes('scissor') && player.includes('rock')) return Winner('player');

        else if(cpu.includes('paper') && player.includes('scissor')) return Winner('player');

        else if(cpu.includes('rock') && player.includes('paper')) return Winner('player');

        else if(cpu.includes('rock') && player.includes('rock')) return Draw();

        else if(cpu.includes('scissor') && player.includes('scissor')) return Draw();

        else if(cpu.includes('paper') && player.includes('paper')) return Draw();

    }


    checkWinningCondition();

    log(`

    `)

}

