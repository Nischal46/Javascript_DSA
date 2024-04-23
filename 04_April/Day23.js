// insertion, deletion, searching and updating of the array.

let numArray = [12, 43, 22, 67, 53, 37, 88];

for (let i = numArray.length - 1; i >= 0; i--){
    if(i >= 3){
        numArray[i+1] = numArray[i];
        
        if(i == 3){
            numArray[i] = 7;
        }
    }
}

console.log(numArray);

//arranging data in descending order by using bubble sort algorithm

for(let i = 0; i <= numArray.length - 1; i++){
    for(let j = 0; j <= numArray.length - 1; j++){
        if(numArray[j] < numArray[j + 1]){
            let temp = numArray[j];
            numArray[j] = numArray[j+1];
            numArray[j+1] = temp;
        }
    }
}

console.log(numArray);