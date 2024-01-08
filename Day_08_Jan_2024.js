// Scissor Paper Rock
const {log} = require('console');

let possibleOutcomes = ['scissor', 'paper', 'rock'];


function GenerateOutcomes(player){
    return (possibleOutcomes[Math.floor(Math.random() * possibleOutcomes.length)]);

}

function Winner(player){
    log(`${player} win`);
}

function checkWinningCondition() {

    let player1 = GenerateOutcomes('player1');
    log(' the value of player1 after rolling is ', player1);
    let player2 = GenerateOutcomes('player2'); 
    log(' the value of player2 after rolling is ', player2);

    if(player1 === 'rock' && player2 === 'scissor') return Winner('player1');

    else if(player1 === 'scissor' && player2 === 'paper') return Winner('player1');

    else if(player1 === 'paper' && player2 === 'rock') return Winner('player1');

    else if(player1 === 'scissor' && player2 === 'rock') return Winner('player2');

    else if(player1 === 'paper' && player2 === 'scissor' ) return Winner('player2');

    else if(player1 === 'rock' && player2 === 'paper') return Winner('player2');

    else if(player1 === 'rock' && player2 === 'rock') return log('Draw');

    else if(player1 === 'scissor' && player2 === 'scissor') return log('Draw');

    else if(player1 === 'paper' && player2 === 'paper') return log('Draw');

}

checkWinningCondition();


