import { arrayDeclare } from "./datastructure/array.js";

//console.log("Logging of the array declare in derived file: ", arrayDeclare);

import { iife, parentScope } from "./advanced/closures.js";

const result = parentScope();
result();
result();

iife();
iife();
iife();
iife();
