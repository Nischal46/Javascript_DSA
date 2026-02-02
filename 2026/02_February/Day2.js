//concept about closure
//closure useful to make private state and controlled memory

function createCounter() {
  let count = 0;

  return {
    increment() {
      count++;
      console.log("Counter value: ", count);
      return count;
    },
    reset() {
      count = 0;
    },
  };
}

let counter = createCounter();
// console.log("counter ---", counter);
// counter.increment();
// counter.increment();
// counter.increment();
// counter.reset();
// counter.increment();
// counter.increment();
// counter.increment();
// counter.increment();

//event loop concept
console.log("A");
setTimeout(() => console.log("This will log at last due to macro task"), 0);

Promise.resolve().then(() =>
  console.log("This will log just before the macro task as it is microtask")
);

console.log("Although it is last but it logs as synchronously");

const user = {
  name: "Nischal",
  greet() {
    // console.log("this is method");
    console.log(this.name);
  },
};

// console.log(user.greet());

const greet = user.greet;
greet.call(user); // undefined
