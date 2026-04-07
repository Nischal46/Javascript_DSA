//Promise concept 

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolved and sent after 1 sec");
  }, 1000)
});

promise.then(val => {
  console.log("val recieved after 1 sec: ", val);
});

const promise2Concept = new Promise((resolve, reject) => {
  resolve("promise 2 is resolved fast");
});

promise2Concept.then(val => console.log(val));

function checkfnDetails() {
  return `This function is call by ${this.name}`
}

const obj1 = {
  name: "Nischal",
  checkfnDetails
};

console.log(obj1.checkfnDetails());

const obj2 = {
  name: "function 2"
};

const derivedFromCall = obj1.checkfnDetails.call(obj2);
console.log(derivedFromCall);

const derivedFromApply = obj1.checkfnDetails.apply(obj2);
console.log("Logging apply concept ---", derivedFromApply);

const obj3 = {
  name: "Myself"
};

const derivedFromBind = obj1.checkfnDetails.bind(obj3);
console.log("Logging of the bind concept as it returns function ---", derivedFromBind());

