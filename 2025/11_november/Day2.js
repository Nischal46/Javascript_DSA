function UserInput(action) {
  process.stdout.write(`${action === 1 ? "Enter folder name" : "Enter file name"}`);

  process.stdin.on("data", (data) => {
    console.log(data);
    const name = data.toString().trim();
    console.log(`Hello, ${name}!`);
    process.exit();
  });
}

function Display() {
  console.log(`
        1. Create Folder
        2. Create File
        `);
}

class Node {
  constructor(name, isFile = false) {
    this.name = name;
    this.isFile = isFile;
    this.children = [];
  }
}

function main() {
  let rootnode = new Node("Nischal Folder");

  let appContinue = true;
  while (appContinue) {
    Display();
  }
}

main();
