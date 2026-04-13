const isEqual = require("lodash/isEqual");
const obj1 = {
  a: 1,
  b: 2
};

const obj2 = {
  b: 2,
  a: 1
};

console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

console.log("Logging of the checking of the both object ---", Object.getPrototypeOf(obj1) === Object.getPrototypeOf(obj2));

const unserializedArrays = {
  a: { a: { a: 1 } },
  c: "c",
  d: "d",
  b: "b",
  f: "f",
  e: "e"
};

const serializeObjects = {
  a: { a: { a: 1 } },
  b: "b",
  c: "c",
  d: "d",
  e: "e",
  f: "f"
};

console.log("Logging throuh object prototype ---", Object.getPrototypeOf(serializeObjects) === Object.getPrototypeOf(unserializedArrays));

console.log(unserializedArrays);

console.log("----------------------Lodash---------------------------");
console.log(isEqual(unserializedArrays, serializeObjects))
