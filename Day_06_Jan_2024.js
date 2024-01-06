// Sorting of the array
const readlinesync = require('readline-sync');

let array = [34,12,54,76,9];

console.log('The initial array data is ', array);

console.log(`
--> Press 1 to arrange the array data in ascending order
--> Press 2 to arrange the array data in descending order
`)

const userChoice = +readlinesync.question('Enter what you want to perform: ')

console.log('------------------Program--------------------');

switch(userChoice){
    case 1:
        for(let i = 0; i<array.length; i++){
            for(let j= 0; j<array.length; j++){
                if(array[j] > array[j+1]){
                    let temporaryValue = array[j];
                array[j] = array[j+1];
                array[j+1] = temporaryValue;
                }
            }
        }
        console.log('Arranging array data in ascending order: ', array);

        break;

        case 2:
            for(let i = 0; i<array.length; i++){
                for(let j = 0; j<array.length; j++){
                    if(array[j] < array[j+1]){
                        let temp = array[j];
                        array[j] = array[j+1];
                        array[j+1] = temp;
                    }
                }
            }

            console.log('Arranging array data in descending order: ', array);

            break;

        default:
            console.log('Invalid input from the user. Please choose a valid input for the operation');

            break;

}


