// Deleting of the element from the array.

const readlinesync = require('readline-sync');
const choice = +readlinesync.question("Enter choice: ");
let arrayData = [23,54,65,77,84,24];

console.log("The element of the array is:", arrayData);

switch(choice){

    case 1:
        let deleteElementIndex = 4;
        for (let i = deleteElementIndex; i < arrayData.length; i++) {
            arrayData[i]  = arrayData[i + 1];
            
        }
        arrayData.length = arrayData.length - 1;
        console.log(arrayData);

        break;

    case 2:
        let searchElement = 65;
        let index;
        for(let i = 0; i < arrayData.length; i++){
            if( arrayData[i] === searchElement){
                index = i;
                break;
            }
        }
        console.log(`The search element ${searchElement} is found at ${index}`);

        break;

    case 3:
        let insertedElement = 90;
        let positionIndex = 3;

        for(let i = arrayData.length - 1; i >= 0; i--){
            if(i >= positionIndex){
                arrayData[i + 1] = arrayData[i];

                if(i === positionIndex){
                    arrayData[i] = insertedElement;
                }
            }
        }
        console.log(`The inserted element ${insertedElement} at the index of ${positionIndex} is: `, arrayData);

        break;

    default:
        console.log("Invalid choice");
        break;
      
}





