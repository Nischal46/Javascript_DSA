// class related problems
const prompt = require("prompt-sync")();

let dbData = [];
let init = true;

class DBAPI {
  constructor() { }

  create(data) { }

  findAll() { }

  findOne() { }

  delete() { }

  update() { }
}

function DisplayChoice() {
  console.log(`
  ------Press------
  1. To InsertData in DB 
  2. FindAll Data 
  3. Find Specific Data 
  4. Delete Data 
  5. Update Data 
`);
}

while (init) {
  console.clear();
  DisplayChoice();
  const userinput = prompt("Enter choice: ");
  console.log(userinput);

}
