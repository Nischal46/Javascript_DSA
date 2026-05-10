//class concept 

let userData = [
  { id: 1, name: "nischal", email: "nischal@dev.com", password: "asdf", role: "admin" },
  { id: 2, name: "baniya", email: "baniya@dev.com", password: "sdfg", role: "maintainer" }
]

function Authorization(email, password) {
  this.email = email;
  this.password = password;
  this.role = this.checkRole();
};

Authorization.prototype.auth = function () {
  const findUser = userData.find(cl => cl.email === this.email);

  if (findUser.email !== this.email || findUser.password !== this.password) {
    console.log("Incorrect email or password");
    return;
  }

  return findUser;
}

Authorization.prototype.checkRole = function () {
  const checkValidUser = this.auth();
  return checkValidUser.role;
}


class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add() {
    console.log("----This is addition method----");
    return this.a + this.b;
  }

  subtract() {
    console.log("-----This is subtraction method-----");
    return this.a - this.b;
  }

  multiply() {
    console.log("----This is multiplication method-------");
    return this.a * this.b;
  }

  divide() {
    console.log("----This is division method------");
    return this.a / this.b;
  }
}

const auhObject = new Authorization("nischal@dev.com", "asdf");
console.log(auhObject);

const objNum = new Calculator(3, 2);
console.log(objNum.add());
console.log(objNum.multiply());
