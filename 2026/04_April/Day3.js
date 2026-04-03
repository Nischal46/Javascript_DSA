function greet(role = "Developer") {
  return `Hello, I am ${this.name} and my email is ${this.email}. Role: ${role}`;
}

const personObj = {
  name: "Nischal",
  email: "nisal@gmail.com",
  greet
};

const personObj2 = {
  name: "baniya"
};

console.log("Person obj --- ", personObj);
console.log(personObj.greet("Engineer"));

console.log(personObj.greet.call(personObj2));

function checkThisFn() {
  return this;
}

console.log(checkThisFn());

console.log(this);


const user = {
  name: "abc",
  regularFn: function () {
    return `${this.name}: come from regularFn`
  },

  arrowFn: () => {
    return `${this.name}: come from arrowFn`
  }
};

console.log(user.regularFn());
console.log(user.arrowFn());

