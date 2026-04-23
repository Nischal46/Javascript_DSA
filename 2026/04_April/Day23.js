//object defineProperties 

//groupby
const products = [
  { name: "Laptop", price: 62000 },
  { name: "Mouse", price: 1500 },
  { name: "Keyboard", price: 5000 },
  { name: "Monitor", price: 21000 },
  { name: "Chair", price: 12000 }
];

function myCallback({ price }) {
  return price > 20000 ? "expensive" : price < 20000 && price > 10000 ? "medium" : "budget friendly";
}

const result = Object.groupBy(products, myCallback);
console.log("Logging of the result ---", result);

//prevent object to add new properties 

const loggedInUser = { name: "Nischal", email: "nisal@dev.com" };
//Object.preventExtensions(loggedInUser);
loggedInUser.newProperty = "newly added";
console.log("loggedin user properties: ", loggedInUser);

let descriptor = Object.getOwnPropertyDescriptor(loggedInUser);
console.log("descriptor ---", descriptor);
