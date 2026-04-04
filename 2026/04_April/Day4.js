// callback fn 

console.log("this run first of all");

const promiseConcept = new Promise((resolve, reject) => {
  console.log("Promise resolved");
});

console.log(promiseConcept);

setTimeout(() => {
  console.log("This log will run after 2 sec");
}, 0);

console.log("This run second");

function customfilterEvenOddFn(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(`${arr[i]} is even number`);
    }
    else {
      console.log(`${arr[i]} is odd number`);
    }
  }
}

function useownFn(cb) {
  console.log("running callback inside it");
  cb([1, 2, 3, 4, 5, 6, 7, 8, 9]);
}

useownFn(customfilterEvenOddFn);

//there are two types of callback as they are synchronous and asynchronous
//synchronous callbacks

//Array methods

const numArray = [];

for (let i = 0; i < 10; i++) {
  numArray.push(i + 1);
}

const synchronousMapFn = numArray.map((cl) => {
  console.log("iterate through map -- ", cl);
})

setTimeout(() => {
  console.log("This callback run in 1 sec");
}, 1000);

console.log("This is last but seems to log fast");
