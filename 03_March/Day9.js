/*
1. OOPS
*/

class Vehicle{
    constructor(name, model, color, price){
        this.name = name;
        this.model = model;
        this.color = color;
        this.price = price;
    }
}

class Car extends Vehicle{
    constructor(name, model, brand, price, numberplate){
        super(name, model, brand, price)

        this.numberplate = numberplate
        
    }
}

const obj1 = new Car('Ferrari', 'REar Augusta', 'Red', 1200000, 'Ba pra 03 9876');
console.log(obj1);