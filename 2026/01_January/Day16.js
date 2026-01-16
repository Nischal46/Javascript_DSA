//concept of call, apply and bind methods in JavaScript
//first scenario using call method where we share methods between objects

const person1 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function(param) {
        return this.firstName + " " + this.lastName + (param ? " " + param : "");
    }
};

const person2 = {
    firstName: "Jane",
    lastName: "Smith"
};

const obj2 = {
    firstName: "Alice",
    lastName: "Johnson"
}

// console.log(person1.fullName.call(obj2)); // Output: John Doe



// // Using call to borrow fullName method from person1
// console.log(person1.fullName.call(person2, "passparam")); // Output: Jane Smith

const productArray = [
    { name: "Laptop", price: 100000 },
    { name: "Phone", price: 50000 },
    { name: "Tablet", price: 30000 },
    { name: "Monitor", price: 20000},
    { name: "Laptop", price: 80000 },

];

const filterProduct = productArray.filter(cl => cl.name === "Tablet");
console.log(filterProduct);

const firstLaptopIndex = productArray.findIndex(cl => cl.name === "Laptop");
console.log(firstLaptopIndex); // Output: 0

const findLastIndexLaptop = productArray.findLastIndex(cl => cl.name === "Laptop");
console.log(findLastIndexLaptop); // Output: 4