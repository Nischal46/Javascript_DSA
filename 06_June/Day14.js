// Revising of the Arrays.

const pc = ['dell', 'lenovo', 'acer'];

const mobile = ['samsung', 'apple', 'oppo'];

const tablet = ['vivo']

//merging of the array using concat method as it return new array so we have to store it in new variable
//we can make more array into one using concat

const electronic_device = pc.concat(mobile).concat(tablet);
// console.log('using of the concat method', electronic_device);

//another useful trending method is using of the spread operator

const popular_device = [...pc, ...mobile, ...tablet];
// console.log('using spread operator', popular_device);

//checking of the variable whether it is an array or not

// console.log(Array.isArray(popular_device));
// console.log(Array.isArray("This is string"));

//to make string to array

// console.log(Array.from("Javascript"));

//to store the variable data into an array we can use

const movie1 = 'dune', movie2 = 'Animal', movie3 = 'The maze runner';
// console.log(Array.of(movie1, movie2, movie3));

//Object method

// let studentDetails = {} //empty array is declared


let studentDetails = {
    name: "Nischal Baniya",
    //we can declare key value pair in the pure format of the string
    "email": "nischal@gmail.com",
    contact: 987563839390,
    isActive: true
}

console.log(studentDetails.name); // directly accessing
console.log(studentDetails["email"]); // accessing by key

//we can modify the object by adding of the data or method furthermore

studentDetails.scanning = function(){
    console.log(`Hello User. ${this.name}`);
}

studentDetails.scanning();

//likewise we can also freeze the object
Object.freeze(studentDetails);

studentDetails.address = "Lalitpur";

// console.log(studentDetails);

// combining of multiple object in single

let object1 = {sunday: "pushup", monday: "pullup"};
let object2 = {tuesday: "legs", wednesday: "sholder"};
let object3 = {thursday: "back", friday: "arms"}

//1st method
const fullobject = Object.assign({}, object1, object2, object3);
console.log('assigning into single variable object', fullobject);

//2nd method is using of spread operator

let fullobject2 = {...object1, ...object2, ...object3}
console.log('using spread operator', fullobject2);

//we can also extract the only key from the object and expect output in array form
let onlykeys = Object.keys(fullobject);
console.log('extracting only keys', onlykeys);

//we can also extract the only pair of values form and expect output in array form

let onlyvalues = Object.values(fullobject);
console.log('extracting only values', onlyvalues);

//sometime it is important to check in api whether it consists of the key in object or not and return in boolean

let checkKey = fullobject.hasOwnProperty('sunday');
console.log(checkKey);