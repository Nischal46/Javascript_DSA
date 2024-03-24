//Array method in js
//removing the delement from the array from the first indexing

let evenNumbers = [2,4,6,8,10,12,14]
//to delete the element of the first index that is 2 from the array we use the shift method

evenNumbers.shift()
//this shift method change the index of the element in the array
console.log(evenNumbers);

//similarly if we want to restore the value in the first index of the array then
evenNumbers.unshift(0)
console.log(evenNumbers);

//to delete the element from the last index of the array
evenNumbers.pop()
console.log(evenNumbers);

//to check the element index in the array
console.log(evenNumbers.indexOf(12));
// if the element is preesent in the array then it display the indesx iof the array if not then it gives 
// -1 as result

//another useful method of the arry is include method tocheck either the data is perviously present or not
let array = [12, 43, 65, 76, 47, 87];
console.log(array.includes(49));

//another useful method is reverse
console.log(array.reverse());