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