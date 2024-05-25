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