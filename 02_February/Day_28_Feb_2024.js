//array related questions

// 1. remove all even integers from an array

let num = [4, 1, 9, 10, 15, 22, 5, 14];
removearray = []
for(let i = 0; i < num.length; i++){
    if(num[i] % 2 == 0){
        removearray.push(num[i])
    }
}

console.log(removearray);



// 2. find all repeated numbers in the array

let input = [1,2,4,7,6,1,3,7,9,10]
let uniquearray = []
for(let i = 0; i<input.length; i++){
    if(!uniquearray.includes(input[i])) uniquearray.push(input[i])
}

console.log('The repeatance of the array is ', input);
console.log(`After removing the duplicate value in array `, uniquearray);