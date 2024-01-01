// Insertion of the element of the array.
const readlinesync = require('readline-sync');

let arraydata = [60, 70, 80, 90];
const newelement = +(readlinesync.question('Enter a number: '));

const position = +(readlinesync.questionInt('Enter a position to insert in the array: '));

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

