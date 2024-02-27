//set and its uses
//set is the collection of the data as it contains only unique element
//it does not store the key value pair as object.
//it supports 1D array
let numArray = [12, 54, 22, 76, 43];
let setConcept = new Set(numArray);

//we can pass array

setConcept.add(100)

setConcept.delete(76)

//we can also pass the object
let obj = {
    programming: 'JS'
}

setConcept.add(obj)

console.log(setConcept);

//to check whether set contains deefined num or not if yees it return true otherwise false
console.log(setConcept.has(22));

//all this add, delete, has can be perform due to the prototypr inheriteence concept

//differencee between includes and some method in array prototype

let array = ['lalitpur', 'bhaktapur', 'kathmandu', 'pokhara'] //includes method check the equality in the array or not
console.log(array.includes('palpa'));

let array2 = [23, 54, 44, 65, 77, 89]
const numcheck = array2.some(pd => pd > 50)
console.log(numcheck);



