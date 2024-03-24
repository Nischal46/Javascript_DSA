//Array method in js
//removing the delement from the array from the first indexing

let evenNumbers = [2,4,6,8,10,12,14]
//to delete the element of the first index that is 2 from the array we use the shift method

evenNumbers.shift()
//this shift method change the index of the element in the array
// console.log(evenNumbers);

//similarly if we want to restore the value in the first index of the array then
evenNumbers.unshift(0)
// console.log(evenNumbers);

//to delete the element from the last index of the array
evenNumbers.pop()
// console.log(evenNumbers);

//to check the element index in the array
// console.log(evenNumbers.indexOf(12));
// if the element is preesent in the array then it display the indesx iof the array if not then it gives 
// -1 as result

//another useful method of the arry is include method tocheck either the data is perviously present or not
let array = [12, 43, 65, 76, 47, 87];
// console.log(array.includes(49));

//another useful method is reverse
// console.log(array.reverse());

//multi dimensional array : it is array inside array. it can be nested

//suppose there is scenario where the loop iterates for 5 times and each iteration the loop
// ask to enter the student name and the grade/ If the student is in grade 11 then it is kept
// in seperate and similar concept for the grade 12
const input = require('readline-sync');
let gradearray = [[],[]];

// for(let i = 0; i < 5; i++){
//     const name = input.question("Enter student name: ");
//     const grade = +input.question("Enter grade: ");

//     if(grade === 11){
//         gradearray[0].push({name, grade})
//     }

//     else{
//         gradearray[1].push({name, grade})
//     }
// }

//in other concept we can also used multi dimnensional array inorder to sepearte according to gender

console.log(gradearray);

//adding newer value in existed array

let student = ['ram', 'hari'];

//this ... dot is known as spread operator where the existed old value is been carried and merge to new value
const newarray = [...student, 'ramesh']
console.log(newarray);

//spread operator can be used on the array and object

//another most useful method is reduce method of array

const name = ['ram', 'hari', 'ramesh', 'laxman'];

const filterperson = name.reduce((acc, cur) => {
    if(cur.startsWith('r')) return [...acc, cur];
    else return acc
}, [])

console.log(filterperson);

//this will minimize the steps and made easy and the output is ['ram', 'ramesh']
