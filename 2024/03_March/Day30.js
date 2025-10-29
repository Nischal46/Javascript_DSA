//class and object

class parent{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
}

class child extends parent{
    constructor(name, email, relation){
        super(name, email);
        this.relation = relation
    }
}

const obj = new child('nischal', 'nischal@gmail.com', 'brother')
console.log(obj);

//abstraction basic logic of OOP

class Encapsulated{
    #bill = 23456;
    constructor(customer_name, customer_account){
        this.customer_name = customer_name;
        this.customer_account = customer_account;
    }

    getdeails(){
        console.log(`
        Customer Name: ${this.customer_name}
        Customer Account: ${this.customer_account}
        Bill No: ${this.#bill}
        `);
    }
}

const obj1 = new Encapsulated('nischal', 34545646)
obj1.getdeails();
console.log(obj1.customer_name); // it is true to access
// console.log(obj1.#bill); // it is not accessible