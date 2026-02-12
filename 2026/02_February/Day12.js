//symbol concept in js

const obj1 = {
  name: "nischal baniya",
}

const core = Symbol("core");


obj1[core] = ['postgres'];
obj1.core = "changed value";

console.log(obj1);
