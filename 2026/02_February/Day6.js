console.log(a);
var a = 3;
console.log(a);

//console.log(b); //NOTE: here if we log b it gives warning error as cannot access before initialization
let b = 4;
console.log(b);

//NOTE: method in object

const user = {
  name: "Nischal",
  details(paramspass){
    console.log("Hitting method");
    console.log(this.name);

    if(paramspass){
      console.log("This method inside of object executes because of call method and the pass param");
      console.log("params pass: ", paramspass);
    }
  }
}

const getDetails = user.details;
getDetails();

const getDetails2 = user.details.call({name: "name borrower"}, "call method");

//NOTE: Prototype and inheritance concept;

function Instrument(productType){
  this.productType = productType;
}

Instrument.prototype.details = function (params) {
  console.log(`This instrument ${this.productType} belongs to Mr ${params}`);
}

const obj1 = new Instrument("Mantra Guitar");
obj1.details("Nischal Baniya");
console.log(obj1);

