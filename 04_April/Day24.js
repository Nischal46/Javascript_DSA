//constructor function and its prototype

function Details(name, address, contact, email){
    this.name = name;
    this.address = address;
    this.contact = contact;
    this.email = email;
}

Object.prototype.flashdetails = function(){
    console.log(`
    WELCOME
    Name: ${this.name}
    Address: ${this.address}
    Contact: ${this.contact}
    Email: ${this.email}
    `);
}

const obj = new Details('Nischal', 'Lalitpur', 9844738900, 'nisal@gmail.com');
obj.flashdetails()