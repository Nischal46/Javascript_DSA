//object literal
// this is the object declaration with its properties

const objectLiteral1 = {
    tenderName: 'XYZ',
    tenderInitialDate: '2012',
    tenderCompletionDate: '2020'
}; 

//constructor function
//for an example we access fetch, Date, Promise etc many times and it is also a constructor function

//naming of the constructor function should be always uppercase
function Details(item, itemPrice, manufacture){

    //whenever the constructor function gets called it creates an empty object literal
    // console.log('Initial when the constructor fn gets called', this);
    this.item = item;
    this.itemPrice = itemPrice;
    this.manufacture = manufacture;

    return this;

    // console.log('Later when the value gets assign', this);
    //later it get assign its value with reference of this keyword and pass or return the value
}

const obj1 = new Details('headset', 2500, 'fantech');
const obj2 = new Details('mouse', 1500, 'fantech')
// console.log(obj1);
// console.log(obj2);

//prtotypal behaviour
// in regard all the function object string array and object itself have the reference of the object prototypal inheritence

Object.prototype.description = function(){
    console.log('This is from the object');
}

let newArray = ['pen', 'pencil', 'copy'];

newArray.description();