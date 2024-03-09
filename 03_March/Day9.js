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

    set name(val){
        if(val === "" || val === null || val === undefined){
            console.log('Must provided name of the vehicle');
        }
        else{ 
            return this._name = val
        }
    }

    get name(){
        return this._name
    }
}

class Car extends Vehicle{
    #importer

    constructor(name, model, brand, price, numberplate, importdealer){
        super(name, model, brand, price)

        this.numberplate = numberplate
        this.#importer = importdealer
        
    }

    getImporter() {
        return this.#importer;
    }
}

const obj1 = new Car('Ferrari', 'REar Augusta', 'Red', 1200000, 'Ba pra 03 9876', 'USA');
console.log(obj1);
console.log(obj1.getImporter());