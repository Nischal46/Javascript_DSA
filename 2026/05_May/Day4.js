//Generator function concept 

function* TrafficLight(inp) {
  console.log("Red Light");
  yield "Red Light";

  console.log("Yellow Light");
  yield "Yellow Light";

  console.log("Green Light");
  const valCapture = yield inp;
  console.log("Value capture ---", valCapture);
}

const genFnCall = TrafficLight();
console.log(genFnCall.next());
console.log(genFnCall.next());
console.log(genFnCall.next());
console.log(genFnCall.next(23));
