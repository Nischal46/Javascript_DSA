let numarray = [12, 43, 55,22, 34, 54, 17];

for(let i = 0; i < numarray.length - 1; i++){
    for(let j = 0; j < numarray.length - 1; j++){
        if(numarray[j] > numarray[j+1]){
            let temp = numarray[j];
            numarray[j] = numarray[j+1];
            numarray[j+1] = temp;
        }
    }
}

console.log(numarray);


for (let i = 2; i<=numarray.length - 1; i++){
    numarray[i] = numarray[i+1];
    numarray.length = numarray.length - 1;
}

console.log('After deletion: ');
console.log(numarray);