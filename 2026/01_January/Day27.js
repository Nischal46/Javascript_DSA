//concept about map and weak map

const mapConcept = new Map();

let FirstObject = { id: 7, name: "random-7" };

mapConcept.set(FirstObject, "7 - iteration");

for (let i = 1; i <= 5; i++) {
  mapConcept.set(
    {
      id: i,
      name: `random-${i}`,
    },
    `${i} - iteration`
  );
}

console.log("Logging of the object before freeing -----", FirstObject);

FirstObject = null;

console.log("Logging of the object after freeing -----", FirstObject);


console.log("Logging of map ---", mapConcept);
console.log("Contains after freeing -------------", mapConcept.get({ id: 7, name: "random-7" }));


console.log("=============================================================")

//NOTE: Map have strong reference


let weakMapConcept = new WeakMap();

let secondObject = { id: 7, name: "random-7" };

weakMapConcept.set(secondObject, "7 - iteration");

for (let i = 1; i <= 5; i++) {
    weakMapConcept.set(
    {
      id: i,
      name: `random-${i}`,
    },
    `${i} - iteration`
  );
}

console.log("Logging of the object before freeing -----", secondObject);

secondObject = null;

console.log("Logging of the object after freeing -----", secondObject);


console.log("Logging of map ---", weakMapConcept);
console.log("Contains after freeing -------------", weakMapConcept.has({ id: 7, name: "random-7" }));

