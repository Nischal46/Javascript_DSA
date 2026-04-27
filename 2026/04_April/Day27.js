function ConstructorFn(name, email, role) {
  this.name = name;
  this.email = email;
  this.role = role;
}

ConstructorFn.prototype.greetings = function () {
  console.log("-------------Greetings from prototype fn -------------------");
  return `
  Hello,
        ${this.name}. Welcome for joining to our app.
`
}

const firstObj = new ConstructorFn("john", "john@mail.com", "junior dev");
console.log("Logging of the constructor: ");
console.log(firstObj);
const methodCalling = firstObj.greetings();
console.log(methodCalling);
console.log(methodCalling instanceof ConstructorFn);
console.log(firstObj instanceof ConstructorFn);

const secondObj = new ConstructorFn("parker", "parker@mail.com", "senior dev");
const methodCalling2 = secondObj.greetings();

console.log(methodCalling === methodCalling2);
console.log(firstObj.greetings === secondObj.greetings);

const SecondaryFn = function (name, email, role, address) {
  ConstructorFn.call(this, name, email, role);
  this.address = address;
};

SecondaryFn.prototype.checkEmail = function () {
  if (this.email.includes("@") && this.email.includes(".")) {
    return `${this.email} is valid`;
  } else {
    return `${this.email} is not valid`;
  }
};

const thirdObj = new SecondaryFn("tester", "tester@mail!com", "devops", "lalitpur");
console.log(thirdObj);
console.log(thirdObj.checkEmail());
