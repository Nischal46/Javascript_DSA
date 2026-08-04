const readline = require("node:readline");
const { BlockingThread } = require("./asynchronous/blocking.js");


const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function AskingName() {
  console.log("Asking name here called");
  const res = await rl.question("What is your input", name => {
    console.log("Hello, ", name);
    rl.close();

    return res;
  });
}

function HeavyFetching() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("data resolved and fetched", 1000));
  });
}

async function run() {
  console.log("step 1 executed");

  const result = await HeavyFetching();

  console.log("step 2 ", result);

  AskingName();

  console.log("step 3 executed");
}

run();
console.log("Outside of the stack run before resolving of the promise");

BlockingThread();

console.log("Logging at last after all task gets executed");
console.log(Object.prototype);
