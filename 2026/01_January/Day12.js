//about asynchronous function concept

const promiseProviderFn = new Promise((resolve, reject) => {
  if (2 + 2 === 4) {
    setTimeout(() => {
      console.log("Calculation done...");
      resolve("correct");
    }, 4000);
  } else reject("incorrect");
});

async function GetFnAsynchronously() {
  setTimeout(() => {
    console.log("Only log after 3 sec");
  }, 3000);
  console.log("This need to be called first but last");

  const checkAddition = await promiseProviderFn;

  console.log(checkAddition);

  console.log("This is block due to await keyword");
}

GetFnAsynchronously();

function GetFn1() {
  console.log("This is synchronous code");
}

GetFn1();

console.log("At last");
