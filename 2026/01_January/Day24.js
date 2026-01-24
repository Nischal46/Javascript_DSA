//promise provider

function GuessLogic() {
  return Math.floor(Math.random() * 100 + 1);
}

const promiseProvider = new Promise((resolve, reject) => {
  const guessNumber = GuessLogic();

  if (guessNumber % 2 == 0) resolve("Even number");
  else reject("Odd Number");
});

//promise consumption

let promiseConsumption = promiseProvider
  .then((res) => console.log("Resolved: ", res))
  .catch((err) => console.error("Reject: ", err));


//set concept

let arr = [1,2,4,5,3,2,6,7,4,3];
// let holding unique value by set concept

let uniqueSet = new Set();

for (let i=0; i< arr.length; i++){
    uniqueSet.add(arr[i]);
}

console.log("Logging only unique value in set: ", uniqueSet);
