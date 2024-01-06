// Sorting of the array

let array = [34,12,54,76,9];

console.log('------------------Program');

for(let i = 0; i<array.length; i++){
    for(let j= 0; j<array.length; j++){
        if(array[j] > array[j+1]){
            let temporaryValue = array[j];
        array[j] = array[j+1];
        array[j+1] = temporaryValue;
        }
    }
}

console.log(array);