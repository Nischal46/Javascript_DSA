// Sorting of the array
const readlinesync = require('readline-sync');

let array = [34,12,54,76,9];

console.log('The initial array data is ', array);

console.log(`
--> Press 1 to arrange the array data in ascending order
--> Press 2 to arrange the array data in descending order
--> Press 3 to insert the element in the array
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


        case 3:
            const newElement = +readlinesync.question("Enter the element that need to be added: ");
            const arrayPosition = +readlinesync.question("Enter a position of the array where the new wlement is to be inserted: ");

            console.log(`
            --> Press 1 to perform through logic method
            --> Press 2 to perform through javaScript built in splice method
            `)
            const insertionChoice = +readlinesync.question("Enter the insertion method: ");

            switch(insertionChoice){
                case 1:
                    for(let i = array.length - 1; i >= 0; i--){

                        if(i>=arrayPosition){
                            array[i + 1] = array[i];
        
                            if(i === arrayPosition){
                                array[i] = newElement;
                            }
                        }
        
                    }
                    console.log('Perform through logical method');
                    break;

                case 2:
                    array.splice(arrayPosition, 0, newElement);
                    console.log("Perform through javaScript built in splice method")
                    break;

                default:
                    console.log("Invalid option");
                    break;
            }

 

            

            console.log(`The initial array after the inserting of the element ${newElement} at the position of ${arrayPosition} is: `, array);
            break;

        default:
            console.log('Invalid input from the user. Please choose a valid input for the operation');

            break;

}


