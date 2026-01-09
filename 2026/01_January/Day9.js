//Working with promise

const { createHmac } = require("node:crypto");

function HashedFn(input) {
  const secretkey = "thisissecret";
  const randomNumber = Math.floor(Math.random() * 10);

  if (randomNumber > 5) {
    const hashed = createHmac("sha256", secretkey).update(input).digest("hex");
    return {
      status: "success",
      message: "Text hashed successfully",
      data: hashed,
    };
  }

  return {
    status: "error",
    message: "Something went wrong",
    data: null,
  };
}

const creatingOfPromise = new Promise((resolve, reject) => {
  const responseFromHashedFn = HashedFn("Nischal code");

  if (responseFromHashedFn.status === "success") {
    return resolve(responseFromHashedFn);
  } else {
    return reject(responseFromHashedFn);
  }
});

creatingOfPromise
  .then((res) => {
    console.log("This is promise consumer");
    console.log(res);
  })
  .catch((err) => console.log(err))
  .finally(() => {
    console.log("Promise execution completed");
  });
