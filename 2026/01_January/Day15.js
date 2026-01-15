//concept of high order fn and callback concept

//we can call fn a high order function if return function or recieve function in param
// every callback fn concept is hof but every hof concept is not callback fn

function hof(val1, val2, callbackfn) {
  callbackfn(val1, val2);
}

hof(2, 3, (a, b) => {
  console.log("recieving in callback fn ", a, b);
});

//function currying is also a hof but it is not callback fn

function curryingfn(a) {
  return function nestedfn(b) {
    console.log("Inside nested hof---", a, b);
    return a + b;
  };
}

// curryingfn(2)(3);
let user = {
  name: "nischal",
};

const authenticateUsers = new WeakSet();

function login(user) {
  authenticateUsers.add(user);
}

login(user);

function isauthenticate(user) {
  return authenticateUsers.has(user);
}

const response = isauthenticate(user); //return true

const response2 = isauthenticate({ name: "nischal" }); //return false

console.log(response);
console.log(response2);

console.log("Logging of weak set ---", authenticateUsers);
