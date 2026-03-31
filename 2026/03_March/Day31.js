//concept between pure function and impure function

function PureFn(a, b) {
  return a + b;
}

console.log(PureFn(3, 4));

function ImpureFn(a) {
  return Math.floor(Math.random() * 20) + a;
}

console.log(ImpureFn(3));

//try catc and finally

function Divide(a, b) {
  if (b === 0) {
    throw new Error("B is 0 thatswhy cannot divide");
  }

  return a / b;
}

try {
  const res = Divide(12, 2);
  console.log("Logging res: ", res);
} catch (err) {
  console.log("Error caught: ", err.message);
} finally {
  console.log("At the end i will run anyway");
}
