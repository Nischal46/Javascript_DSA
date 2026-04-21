const promiseConcept = new Promise((resolve, reject) => {
  let randomNumber = Math.floor(Math.random() * 10);
  console.log("Logging of random number: ", randomNumber);

  if (randomNumber % 2 == 0) {
    resolve({
      status: "Get even random number",
      number: randomNumber
    })
  }

  else {
    reject({
      status: "Got odd random number",
      number: randomNumber
    })
  }

});

promiseConcept.then((res) => {
  console.log("triggering then");
  console.log(res);
}).catch((err) => {
  console.log("triggering catch");
  console.log(err);
})


function insideMethod() {
  return `${this.name} is calling through object just because of this concept`;
}

const obj1 = {
  name: "Nischal"
}

obj1.insideMethod = insideMethod;

const callMethod = obj1.insideMethod.call({ name: "baniya" });

console.log(callMethod);

