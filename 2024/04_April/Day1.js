// oops concept

//inheritence
//abstraction
//encapsulation

class Drink{
    constructor(name, manufacture){
        this.name = name;
        this.manufacture = manufacture;
    }

    getDetails(){
        console.log(`${this.name} is manufacture in ${this.manufacture}`);
    }

    #checkAvailability(){
        if(this.manufacture === 'USA') console.log('Eligible');
        else console.log('Not eligible');
    }

    //this type of abstraction class is developed in order to protect the data inside the class scope

    approval(){
        this.#checkAvailability();
    }
}

//introduce inheritence

class SoftDrink extends Drink{
    constructor(name, manufacture, brand, price){
        super(name, manufacture);
        this.brand = brand;
        this.price = price;
    }
}

const obj_drink = new SoftDrink('Dew', 'USA', 'Mountain', 250);
obj_drink.getDetails();
obj_drink.approval();
console.log(obj_drink);