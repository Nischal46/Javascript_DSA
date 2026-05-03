// generator function 

function* generatorFnConcept() {
  yield "first entrance of function";
  yield "Later execution";
  return "Done";
}

const fnCall = generatorFnConcept();
console.log("Generator fn Call -----------");
console.log(fnCall.next());
console.log(fnCall.next());
console.log(fnCall.next());

function* nextGenerator(inp) {
  console.log("First phase");
  const a = yield inp;

  console.log("Second phase", a);
  const b = yield inp;

  console.log("Third phase", b);
  yield inp;

  return "End here";
}

const gen = nextGenerator("START");

console.log(gen.next());       // start
console.log(gen.next(10));     // goes into `a`
console.log(gen.next(67));     // goes into `b`
console.log(gen.next());       // finish
