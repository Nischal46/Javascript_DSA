// learning about prototype chain

const myObject = {
    empName: "Nischal Baniya",
    experience: "2 yrs",
    stack: "full stack engineer",
    languages: ['js', 'rust']
}

console.log(myObject);

// hasOwnProperty that checks whether there is present of key or not in existed object

console.log(myObject.hasOwnProperty("stack"));

if(!myObject.hasOwnProperty("company")){
    myObject.company = "Mandolly";
}

console.log("Logging of the object: ", myObject);

const notToChangeObject = Object.freeze({
    citizenName: "Harry",
    age: 23,
    email: "harry@gmail.com"
});

// notToChangeObject.email = "abc@gmail.com";

console.log("Logging of the freeze object --- ", notToChangeObject);

console.dir(notToChangeObject.constructor === Object);
