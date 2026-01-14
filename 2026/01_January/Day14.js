//interview questionss in real

// checking variable number or not

function checkIsNan(inp) {
  console.log(isNaN(inp) ? "Not a number" : "number");
}

checkIsNan(2);
checkIsNan("asd");
checkIsNan(undefined);

const arr = [1, 2, 3];
arr[10] = 99;
console.log(arr.length);

console.log(null == {});
console.log(typeof undefined);

let a1;
console.log(a1);

function checkingUndefined(inp = "random") {
  console.log(inp);
}

checkingUndefined(a1);

const match = "abc".match(/b/);
console.log(match); //

let obj = null;

console.log(obj?.a);
console.log(obj);

function handlingNull(a, b) {
  if (typeof a === "number" && typeof b === "number") return "number value";
  else return null;
}

console.log(handlingNull(2, "dsfsd")); //return null;
console.log(handlingNull(3, 4)); //return number

//call and apply concept
// borrrow method from one obj to other

const obj1 = {
  name: "Nischal",
  details() {
    console.log(`From ${this.name}`);
  },
};

const obj2 = { name: "Baniya" };

obj1.details.call(obj2);
