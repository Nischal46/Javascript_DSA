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
    let count = 0;
    for(let i = parameterArray.length - 1; i>=0; i--){
        // newArray.push(parameterArray[i]);
        newArray[count] = parameterArray[i];
        count++;
    }

    return newArray;
}

const arraytoreverse = ['hello', 'from', 'another', 'side'];

const finallyreversed = reverseArray(arraytoreverse);

console.log(finallyreversed);



let studentarray = ['ram', 'hari', 'laxman', 'sudama'];

for(let i = studentarray.length - 1; i >= 0; i--){
    if(i >= 1){
        studentarray[i + 1] = studentarray[i];

        if(i == 1){
            studentarray[i] = 'krishna'
        }

    }

}

console.log(studentarray);

let newarray = [12,43,65,35,76,87];

newarray.splice(3, 0, 'lucky seven');

console.log(newarray);


