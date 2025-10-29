// array method in js

//1st way

const num = [1,2,3,4,5,6];

const newArr = new Array('a', 'b', 'c')

//indexing of the array

console.log(newArr[2]);

//operations used in array

newArr.push('d') //to add element in array at lasr index

console.log('After pushing of the element', newArr);

newArr.pop() // tor emove the element of the array from the last index

console.log('After poping of the element', newArr);

//if you want to add the element in existed array at the first index then 

newArr.unshift('i')

console.log('After unshift of the element', newArr);

//to remove the element of the array from the first index then

newArr.shift();
console.log('After shift of the element', newArr);

//array questioning

//whether array exist the element or not and it gives output in boolean
console.log(newArr.includes('b'));

//gives the correct index if it contains otherwise it return -1
console.log(newArr.indexOf('c'));
console.log(newArr.indexOf('e'));

// incase if we want to change the array into string then 

console.log(newArr.join());

//reemove of the element

console.log(newArr.slice(0, 1));

console.log(newArr.splice(0,1));
