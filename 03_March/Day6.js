//insertion of element in array
//deletion of element in array

let arr = [98, 54, 34, 65, 13, 44];
let target = 2;

for(let i = arr.length - 1; i >= 0; i--){
    if(i >= target){
        arr[i+1] = arr[i]

        if(i === target){
            arr[i] = 52
        }
    }

}

console.log(arr);


for (let i = 1; i < arr.length ; i++){
    arr[i] = arr[i+1]
    
}
arr.length -= 1
console.log(arr);

//fibonacci series upto n numbers

const fibarr = [0,1];
for(let i = 2; i < 7; i++){
    fibarr[i] = fibarr[i-1] + fibarr[i-2]
}
console.log(fibarr);

//factorial number

let result = 1;
for(let i = 2; i <= 4; i++){
    result = result * i;
}

console.log(result);

//linear search and binary search

let numarray = [23, 54, 14, 76, 34, 88, 92, 48];

for(let i = 0; i < numarray.length; i++){
    if(numarray[i] === 34){
        console.log(`found at ${i}`);
    }
}



