// Insertion of the element of the array.
const readlinesync = require('readline-sync');

let arraydata = [60, 70, 80, 90];

console.log('Array is ', arraydata);

const newelement = +(readlinesync.question('Enter a number: '));

const position = +(readlinesync.question('Enter a position to insert in the array: '));
 
// Logic of inserting the element inside loop of array
for(let i = arraydata.length-1; i>=0; i--){
    console.log(arraydata[i]);

    if(i>=position){
        arraydata[i+1] = arraydata[i];
        if(i==position){
            arraydata[i] = newelement;
        }
    }
}

console.log(arraydata);
console.log('--------------------------------------');

//javascript built in method 
//splice method performs actually as the same logic like the above

let newarrayData = [34, 54, 23, 56];

newarrayData.splice(2,0,47); // In this splice the first is index or start of the element, second is to delete and the third is the item that is to be added. 

console.log(newarrayData);

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



