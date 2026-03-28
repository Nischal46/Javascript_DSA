//concept between map and weakmap

let product1 = {
  title: "mobile",
  brand: "Samsung"
}

let mapConcept = new Map();
mapConcept.set(product1, "details of product 1");

product1 = undefined;

console.log("Logging of map----", mapConcept);

let product2 = {
  title: "Pendrive",
  brand: "hp"
}

let weakMapConcept = new WeakMap();
weakMapConcept.set(product2, "details of product2");

console.log("Logging of weakmap before clearing ----", weakMapConcept.get(product2));

product2 = undefined;

console.log("Logging of waekmap after clearing ----", weakMapConcept.get(product2));
