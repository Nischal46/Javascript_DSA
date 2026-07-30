
let a = 1;

let obj = {
  a: 2,
  b: 1
};


console.time("Extract from heap");
console.log(obj.a);
console.timeEnd("Extract from heap");

console.time("Extract from stack");
console.log(a);
console.timeEnd("Extract from stack");

let abc = undefined;

console.log("abc: ", abc);

function add (a, b) {
  console.log(`a: ${a} | b: ${b}`);
  let c = a + b;

  console.log(c);
  return c;
}

add();

let obj1 = {
  name: "nischal",
  fullname: null 
}

console.log("obj1: -> ", obj1);
console.log("fullname: -> ", obj1.fullname);

let array1 = [1,2,3];
let array2 = [1,2,3];

console.log(array1 === array2);

let obj2 = {
  a: 1,
  b: 2
}, obj3 = {
  a: 1,
  b: 2
};

console.log("checking object: ", obj2 === obj3);

let empobj1 = {}, empobj2 = {};

console.log("Checking empty obj: ", empobj1 === empobj2);

let thinsconceptinObj = {
  product: "laptop",
  price: 68000,

  calculatePrice() {
    return `${this.product} costs rs ${this.price}`
  }
};

console.log("Inspect does this work or not: ", thinsconceptinObj);
console.log("triggering calculate price: ", thinsconceptinObj.calculatePrice());
