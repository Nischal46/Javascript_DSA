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



