class Instruments{
    constructor(name, model, price){
        this.name = name;
        this.model = model;
        this.price = price
    }

    getdetails(){
       return `Name: ${this.name}, Model: ${this.model}`;
    }
}

class SubInstruments extends Instruments{
    constructor(name, model, price){
        super(name, model, price)
    }

    getMRPDetails(){
        const output = (this.price * 13) / 100;
        console.log(`${this.getdetails()} and the total MRP price is ${output}`);
    }
}

const obj1 = new SubInstruments('Ukulele', 'X2345', 2500);
obj1.getMRPDetails();

//reduce method in js

const array1 = ['ram', 'ravi', 'laxman', 'balram', 'hari']

const sep_name = array1.reduce((acc, cur) => {
    if(cur.startsWith('r')) return [...acc, cur]
    else return acc
}, [])

console.log(sep_name);

