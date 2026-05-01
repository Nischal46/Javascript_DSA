//real use case of try catch finally

let fetchApiCall = false;
let cacheData = null;

function ApiCall(num1, num2) {
  try {
    if (num1 + num2 === 5) {
      cacheData = true;
      fetchApiCall = true;
      console.log("correct");
    }

    else {
      throw Error("Addition not correct");
    }
  } catch (error) {
    console.log(error.message);
  }
  finally {
    console.log("Anyway it will log and trigger");
  }
}

let count = 0;
const interval = setInterval(() => {
  if (count === 3) {
    count++;
    console.log("This will return cache value");
    fetchApiCall = false;
    return;
  }

  if (count === 10) {
    clearInterval(interval);
  }

  if (!fetchApiCall) {
    console.log("not cache val");
    ApiCall(2, 3);
    count++;
  }

  else {
    console.log("catch Val");
    count++;
  }

  console.log("Logging iteration ----", count);

}, 1000)
