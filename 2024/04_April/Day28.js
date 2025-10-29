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

//write a program to print fizzbuzz concept where num divided by 3 is fizz, num divided by 5 is buzz and if both then it is fizzbuzz

let numArray = [12, 15, 21, 25, 45];

function fizzBuzz(arr){
    for(const no of arr){
        if(no % 3 === 0 && no % 5 === 0) console.log(`${no} is fizzbuzz`);
        else if(no % 3 === 0) console.log(`${no} is fizz`);
        else  if(no % 5 === 0) console.log(`${no} is buzz`);
    }
}

fizzBuzz(numArray)