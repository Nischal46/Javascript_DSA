//object and its method
//call
//apply
//bind
//loop

//we can define object in two ways
//1st approach is 
const objDeclaration = new Object();
objDeclaration.name = 'Mouse',
objDeclaration.price = 2500,
objDeclaration.manufacture = 'fantech'
console.log(objDeclaration);

//every time the object is access by the key value pair. Here the name properties is key and mouse is value

//if we want to declare the object and its properties into its prototype

const newObject = Object.create(objDeclaration);
newObject.quality = 'excellent';
console.log(newObject.__proto__ === objDeclaration);

function Regestration(price){
    return this.price = price
}

//call method interms of object
let item = {
    name: 'laptop'
}

let item2 = {
    name: 'keyboard'
}

console.log('Before call method ');
console.table(item);
console.table(item2)

Regestration.call(item, 125000);
Regestration.call(item2, 5000)

console.log('After call method ');
console.table(item);
console.table(item2)

//call method interms of function and promise concept
function UserPassportDetails(){
    this.userCountry = 'Nepal';
    this.countryCode = '+977';
}

function PassportManagement(username, age, contact, email){
    this.username = username;
    this.age = age;
    this.contact = contact;
    this.email = email;
    const defaultDetail = UserPassportDetails.bind(this);
    defaultDetail()
}

const obj1 = new PassportManagement('nischal', 22, 9845768974, 'nisal@gmail.com')
console.log(obj1);


function Operation(num1, num2, operator){
    if(operator === "minus"){
        this.result = num1 - num2;
    }
    else if(operator === "add"){
        this.result = num1 + num2;
    }
}

function Calculation(a, b, operator){
    this.a = a;
    this.b = b;
    Operation.call(this, a, b, operator)
}

const obj2 = new Calculation(5, 2, 'add');
console.log(obj2);


function Instrument(item){
    this.instruments = []
    for (const cl of item) {
        this.instruments.push(cl);
    }
}

function ShopDetails(name, location, instruments){
    this.name = name;
    this.location = location;
    Instrument.apply(this, [instruments]);
}

const obj3 = new ShopDetails('Electronic Accessories', 'kumaripati', ['guitar', 'cajon', 'ukulele', 'drum']);
console.log(obj3);

