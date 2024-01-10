const readlinesync = require('readline-sync');

function reverseString(parameterValue){
    console.log(parameterValue);
    let reverseinput = '';

    for(let i = parameterValue.length - 1; i >= 0; i--){
        reverseinput += parameterValue[i];

    }
    return reverseinput;
}

// let input = readlinesync.question('Enter string: ');
const input = 'pool'

const stringtoReversed = reverseString(input);
console.log(stringtoReversed);


function reverseArray(parameterArray){
    let newArray = [];

    for(let i = parameterArray.length - 1; i>=0; i--){
        console.log(i);
        newArray.push(parameterArray[i]);
    }

    return newArray;
}

const arraytoreverse = ['hello', 'from', 'another', 'side'];

const finallyreversed = reverseArray(arraytoreverse);

console.log(finallyreversed);


