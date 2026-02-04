let intervalStart = true;
let count = 0;

const promiseProvider = () =>
  new Promise((resolve, reject) => {
    2 < 1 ? resolve("Promise was resolved") : reject("Promise was rejected");
  });

promiseProvider()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

setTimeout(() => console.log("This runs after 2 sec"), 2000);

console.log("Hey hey");

const int = setInterval(() => {
  if (count === 6) {
    clearInterval(int);
    return;
  } else {
    console.log("this run after every 1 sec");
    count++;
  }
}, 1000);

setTimeout(() => console.log("This runs after 5 sec"), 5000);
