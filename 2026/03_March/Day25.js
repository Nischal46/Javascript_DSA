const bank1Properties = {
  details: "This is Bank 1"
};

const bank2Properties = {
  info: "This is Bank 2"
};

bank2Properties.__proto__ = bank1Properties;

console.log(bank2Properties.details);
console.log(bank2Properties.info);

console.log(bank2Properties.hasOwnProperty("details"));
console.log(bank2Properties.hasOwnProperty("info"));

//Newer approach 
// cannot configure 2 object at a time 
const mainBranch = Object.create(bank1Properties);
mainBranch.hasControl = true;
console.log(mainBranch.details);
console.log(mainBranch);

//using assign instead 

const nationalBarnch = Object.assign({}, bank1Properties, bank2Properties);

console.log(nationalBarnch);
