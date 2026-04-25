let parentObject = {
  title: "Laptop Mentor"
};

const newObject = Object.create(parentObject);

//console.dir(newObject, { depth: Infinity });
newObject.name = "Nischal Baniya";
newObject.isDev = true;

console.log(newObject);

let privateVariable = "nischal";
privateVariable = "baniya";

console.log(privateVariable);

class Myclass {
  #privatecode = "this is private";

  constructor() { }

  getter() {
    return this.#privatecode;
  }

  setter() {
    this.#privatecode = "later changed by dev";
  }
}

const classobj = new Myclass();
console.log("Before using setter");
console.log(classobj.getter());
console.log("After using setter");
classobj.setter();
console.log(classobj.getter());
