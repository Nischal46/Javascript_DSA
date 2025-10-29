let array = [12,32,54,22,89,67];

for(let i = 0; i <= array.length - 1; i++){
    for(let j = 0; j <= array.length - 1; j++){
        if(array[j]< array[j+1]){
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}

console.log(array);

//Deleting of the element from the array

const readlinesync = require('readline-sync');

let arrayData = [12,54,43,65,76,87];
console.log('The data inside the array are, ', arrayData);

const deleteIndex = +(readlinesync.question('Enter the position of the element to delete in array: '));


//algorithm
for(let i = deleteIndex; i<arrayData.length - 1; i++){
    arrayData[i] = arrayData[i+1];

}

arrayData.length = arrayData.length - 1;

console.log(arrayData);

console.log("New Array data is removed by JS built in method");

// 1) Splice method

let newarrayData = [23,65,76,33,56,87];

console.log('Array data is, ', newarrayData);

newarrayData.splice(3,1);

console.log(newarrayData);

// 2) Filter method

let array2 = [65,34,90,56,39];

array = array2.filter(el => el !== 56);

console.log(array2);