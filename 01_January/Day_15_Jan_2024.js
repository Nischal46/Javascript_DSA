const input = require('readline-sync');
const footballPlayer = ['messi', 'ronaldo', 'robben', 'bale', 'hazard', 'oscar'];

console.log('The initial football player array')
console.table(footballPlayer);

console.log(`
--> Press 1 to add player name
--> Press 2 to delete player name
--> Press 3 to sort player in ascending order according to name
`)

const operation = +input.question('Enter a choice to perform operation: ');

switch(operation){
    case 1:
        for(let i = footballPlayer.length - 1; i >= 0; i--){
            if(i>=0){
                footballPlayer[i+1] = footballPlayer[i];

                if(i === 0){
                    footballPlayer[i] = 'neymar';
                }
            }
        }

        console.log('After insertion of player')
        console.table(footballPlayer)
        break;

    case 2:
        for(let i = 2; i < footballPlayer.length; i++){
            footballPlayer[i] = footballPlayer[i+1];

        }
        footballPlayer.length = footballPlayer.length - 1;
        console.log('After deletion of football player');
        console.table(footballPlayer);

    case 3:
        for(let i = 0; i < footballPlayer.length - 1; i++){
            for( let j = 0; j < footballPlayer.length - 1; j++){
                if(footballPlayer[j] > footballPlayer[j+1]){
                    let temp = footballPlayer[j];
                    footballPlayer[j] = footballPlayer[j+1];
                    footballPlayer[j+1] = temp;
                }
            }
        }
        console.log('After sorting');
        console.table(footballPlayer);
        break;

    default:
        console.log('Invalid input. Please give correct input');
        break;
}



