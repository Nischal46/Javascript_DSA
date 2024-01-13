const {log} = require('console');
const input = require('readline-sync');

log(`------------------Tic-Tac-Toe------------------`);

const colors = {
    reset: '\x1b[0m',
    red: '\x1b[31m',
    green: '\x1b[32m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
};


let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
]

function DisplayBoard(){
    log(`
    ${board[0][0]} | ${board[0][1]} | ${board[0][2]}
    -------
    ${board[1][0]} | ${board[1][1]} | ${board[1][2]}
    -------
    ${board[2][0]} | ${board[2][1]} | ${board[2][2]}

    `)
}

// board[0][0] = 'X';

let i = 1;
let player1 = 'player1';
let player2 = 'player2';
let flag = true;

function inputUser(player){
    const boardInput = +input.question(`${colors.yellow}Enter a position of board: ${colors.reset}`);

    function CheckEmpty(player, a1, a2){
        if(player === 'player1'){
            board[a1][a2] = 'X'
            flag = false
           }
           else {
            board[a1][a2] = 'O';
            flag = true;
            }
    }

    switch(boardInput){
        case 1:
            CheckEmpty(player, 0, 0)
           break;

        case 2:
           CheckEmpty(player, 0, 1);
           break;

        case 3:
            CheckEmpty(player, 0, 2);
           break;

        case 4:
            CheckEmpty(player, 1, 0);
           break;

        case 5:
            CheckEmpty(player, 1, 1);
           break;

        case 6:
            CheckEmpty(player, 1, 2);
           break;

        case 7:
            CheckEmpty(player, 2, 0);
           break;

        case 8:
            CheckEmpty(player, 2, 1);
           break;

        case 9:
            CheckEmpty(player, 2, 2);
           break;

        default:
            log('Invalid Input. Please give correct input');
            inputUser(player);
            break;
    }
}

let gameEnd = false;

function checkwinner(player, a1, a2, b1, b2, c1, c2, usermove){
    
    if(board[a1][a2] === usermove && board[b1][b2] === usermove && board[c1][c2] === usermove){
        log(`${colors.red}${player} win !!!!!!!.${colors.reset}`);
        gameEnd = true;
    }
}

while(gameEnd === false && i <= 9){

  if(flag === true){
    log(`${colors.green}Player X turn${colors.reset}`)
    inputUser(player1);
  }
  else if(flag === false) {
    log(`${colors.blue}Player Y turn${colors.reset}`)
    inputUser(player2);
  }
  DisplayBoard();
 
if(gameEnd === false){
    checkwinner(player1, 0,0,0,1,0,2, 'X');
    checkwinner(player1, 1,0,1,1,1,2, 'X');
    checkwinner(player1, 2,0,2,1,2,2, 'X');
  
    checkwinner(player1, 0,0,1,0,2,0, 'X');
    checkwinner(player1, 0,1,1,1,2,1, 'X');
    checkwinner(player1, 0,2,1,2,2,2, 'X');
  
    checkwinner(player1, 0,0,1,1,2,2, 'X');
    checkwinner(player1, 0,2,1,1,2,0, 'X');

    checkwinner(player2, 0,0,0,1,0,2, 'O');
    checkwinner(player2, 1,0,1,1,1,2, 'O');
    checkwinner(player2, 2,0,2,1,2,2, 'O');
  
    checkwinner(player2, 0,0,1,0,2,0, 'O');
    checkwinner(player2, 0,1,1,1,2,1, 'O');
    checkwinner(player2, 0,2,1,2,2,2, 'O');
  
    checkwinner(player2, 0,0,1,1,2,2, 'O');
    checkwinner(player2, 0,2,1,1,2,0, 'O');
}

else{
    gameEnd = true;
}

    i++;
}