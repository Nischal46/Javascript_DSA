//concept between map and weakmap

let obj1 = {
    id: 1,
    name: "Nischal Baniya"
}

let mapConcept = new Map();
mapConcept.set(obj1, "First person details");
console.log("Logging the type of map ---", typeof mapConcept);

obj1 = undefined;

console.log("Logging of the object ----", obj1);


console.log("Logging of the map ----", mapConcept)


let obj2 = {
    id: 2,
    name: "Baniya codes"
};

let weakMapConcept = new WeakMap();
weakMapConcept.set(obj2, "Details stored in weakmap");

obj2 = undefined;

console.log("Logging of the weak map ----", weakMapConcept.get(obj2));

//in weakmap there is loose reference