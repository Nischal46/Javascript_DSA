const object1 = {
  status: "success",
  data: {
    secretCode: "12DFDFFDS#@"
  },
  methodFn: function () {
    console.log(`secret code is ${this.data.secretCode}`);
  }
};

console.log(object1);

const object2 = {
  data: {
    secretCode: "#@#$SDFSDF@#"
  }
};

const callMethod = object1.methodFn.call(object2);

console.log("call method: ", callMethod);

const object3 = {
  data: {
    secretCode: "@#$#$%"
  }
};

const bindMethod = object1.methodFn.bind(object3);

bindMethod();

