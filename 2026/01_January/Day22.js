//binding concept
function Greetings(param1 = "random", param2 = "somebody"){
    return `Dear ${param1} ${param2}. Welcome for buying ${this.type} - ${this.brand}`
}

const product = {
    category: "Electronic gadgets",
    brand: "DELL",
    type: "Laptop",
    variant: "black"
}

let bindingConcept = Greetings.bind(product);
console.log(bindingConcept());

//call concept
//it return immediately
let callConcept = Greetings.call(product, "nischal", "baniya");
console.log("This is call concept: ", callConcept);

