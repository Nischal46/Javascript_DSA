function Product(brand) {
  this.brand = brand;
}

Product.prototype.details = function () {
  console.log("Logging of the product ---- ", this.brand);
};

function ElectronicDevices(name) {
  Product.call(this, name);
}

ElectronicDevices.prototype = Object.create(Product.prototype);
ElectronicDevices.prototype.constructor = ElectronicDevices;

const obj = new ElectronicDevices("Dell");
obj.details();

class ApproachByClass {
  public_variable = "this is public variable and can access";
  #private_varaible = "this is private and cannot access";

  constructor(name) {
    this.name = name;
    console.log("Parent class");
  }
  details() {
    console.log("This is details inside of class");
    console.log("Accessing of private variable ---- ", this.#private_varaible);
  }
}

class InheritanceConceptClass extends ApproachByClass {
  constructor(name) {
    super(name);
  }

  method_from_child() {
    console.log("Accessing of public variable ---- ", this.public_variable);
    // console.log("Accessing of private variable ---- ", this.#private_varaible);
  }
}

const obj2 = new InheritanceConceptClass("nischal");
console.log(obj2);
obj2.method_from_child();
obj2.details();
