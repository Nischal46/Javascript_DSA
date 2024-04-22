//reduce method in js

//write a program that deperate the number of multiplication of table

let numArray = [12, 33, 6, 56, 27, 74];

const seperate = numArray.reduce((acc, cur) => {
    if(cur % 2 == 0) return acc.concat(cur);
    else return acc; 
}, [])

console.log(seperate);