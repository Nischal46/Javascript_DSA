//concept of block scope variable

function heavycomputation() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise resolved..."), 0);
  })
}

const res = heavycomputation();
console.log("Logging of the res ----- ", res);

var a = 2;

function changeglobalvariablevalue() {
  var a = 3;
  var b = 5;
  console.log("inside a: ", a);
}

changeglobalvariablevalue();

function anotherfunctiondefined() {
  console.log(b);
}

anotherfunctiondefined();

console.log(a);
console.log("logging from outside b: ", b);

var b = 5;

console.log(this);

function spreadacceptingargs(x, y, ...z) {
  console.log("val of first param x: ", x),
    console.log("value of second param y: ", y);
  console.log("value of remaining val in param z: ", z);
}

spreadacceptingargs(2, 3, 4, 5, 6, 34);

console.log("Logging res at final: ", res.then(cl => cl));

let availablevar = 123;

this.name = "Global";

let objcon = {
  name: "Nischal",
  detailsfromnormalfn: function () {
    console.log("Hello hello ", this.name)
  },

  detailsfromarrowfn: () => {
    console.log("Sure its returns undefined: ", this.name);
    console.log("But it takes from outer global var if we point this: ", this.availablevar);
  }
}

objcon.detailsfromnormalfn();
objcon.detailsfromarrowfn();
