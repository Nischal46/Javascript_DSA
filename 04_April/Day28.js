//class oop abstraction and encapsulation 

class Vehicle{

    #details // we make this variable private and it cannot be access from outside of the class

    constructor(name, brand){
        this.name = name;
        this.brand = brand;
    }

    static(){
        this.#details = `Name: ${this.name} Brand: ${this.brand}`;
        return this.#details;
    }
     
}

const obj = new Vehicle('Tesla', 'brand');

console.log(obj.static());