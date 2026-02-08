//NOTE: block scope declarations concept

var a = 3;

console.log("This runs first");

(function IIFE() {
  console.log("Before initialization a: ", a);
  var a = 5;
  console.log("inside of iife fn a: ", a);
}())

function notiife(){
  console.log("Before initialization in notiife: a is ", a);
  var a = 7;
  console.log("Logging after that: a is ", a);
}

let b = 8;

function functionsopeconcept(){
  console.log("Got error as reference error before initialization", b);
  let b = 4;
  console.log("Logging value of b: ", b);
}

notiife()

functionsopeconcept();

console.log("Outside of function scope a: ", a);
