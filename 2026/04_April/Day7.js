for (let i = 0; i < 3; i++) {
  console.log("From inside of the loop ---", i);
  setTimeout(() => { console.log("From settimeout async callback -", i) }, 10);
}

console.log("This will run after loop");

setTimeout(() => {
  console.log("timeout of async callback")
}, 8);

Promise.resolve().then(() => {
  console.log("Logging of the promise")
});

async function conceptInsideAsyncAwait() {
  console.log("Inside of async await ------ ");
  await Promise.resolve();

  setTimeout(() => {
    console.log("This run at very last");
  }, 2000)

  console.log("This log appear after await");
}

conceptInsideAsyncAwait()


console.log("At end");

const arr1 = [1, 2, 4];

arr1[9] = 9;

console.log(arr1);

//event loop concept that segregates queuemicrotask, queuemicrotask

const resolvedPromise = new Promise((resolve, reject) => {
  resolve("Resolved from the promise")
});

resolvedPromise.then((res) => {
  console.log(res);
});

//event loop inside of async and await 

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let head = new Node(10);
head.next = new Node(20);

console.log(head);
