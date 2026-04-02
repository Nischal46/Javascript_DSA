"use strict";
// hoisting concept 
console.log(a);
var a = 5;
console.log(a);


const obj = {
  name: "object properties"
};

Object.defineProperty(obj, "strictKey", {
  value: "never changed",
  writable: true,
  enumerable: false,
  configurable: true
}
)

obj.strictKey = "changed strict key";
console.log(obj);

console.log(Object.getOwnPropertyDescriptor(obj, "namely"));

const config = {}

Object.defineProperties(config, {
  apiUrl: {
    value: 'https://api.example.com',
    writable: false,
    enumerable: true,
    configurable: false
  },
  timeout: {
    value: 5000,
    writable: true,
    enumerable: true,
    configurable: true
  },
  _internal: {
    value: 'secret',
    writable: false,
    enumerable: false,  // Hidden
    configurable: false
  }
})

console.log(config);

console.log(Object.keys(config))  // ["apiUrl", "timeout"] - no _internal

function ConstructorFunction() {
  let privateVariable = "This is private";

}

const c_obj = new ConstructorFunction();
console.log(c_obj);
console.log(c_obj.privateVariable);

//banking cli application 

//factory function 
function NBBankPortal(username, pin) {

  //lot savedCustomerDetail = [{usern}]

  let transaction = [];

  function BankTransaction(type, amount) {
    transaction.push({ username, type, amount, date: new Date() });
  }

  BankTransaction("saving", 2000);
}

NBBankPortal("nischal", 1234)
