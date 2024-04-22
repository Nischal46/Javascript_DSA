//reduce method in js

//write a program that deperate the number of multiplication of table

let numArray = [12, 33, 6, 56, 27, 74];

const seperate = numArray.reduce((acc, cur) => {
    if(cur % 2 == 0) return acc.concat(cur);
    else return acc; 
}, [])

console.log(seperate);

//suppose the value from frontend comes as length and breadth in array

let value = [3, 4];

//suppose the length is 3 and breadth is 4

const result = value.reduce((acc, cur, index) => {
    acc *= 2*cur
    return acc
}, 1)

console.log(result);