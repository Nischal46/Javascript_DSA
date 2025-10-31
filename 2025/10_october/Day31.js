// implementing tree concept

class Node {
    constructor(name, isFile = false){
        this.name = name;
        this.isFile = isFile;
        this.children = [];
    }

    addChild(childNode){
        if(!this.isFile){
            this.children.push(childNode)
        }
        else{
            console.log("Cannot add to file")
        }
    }
}

const root = new Node("root");
const documents = new Node("Documents");
const photos = new Node("Photos");
const file1 = new Node("resume.pdf", true);
const file2 = new Node("vacation.jpg", true);

root.addChild(documents);
root.addChild(photos);

documents.addChild(file1);
photos.addChild(file2);

console.log(root);

// function printTree(node, indent = "") {
//     console.log(indent + (node.isFile ? "📄 " : "📁 ") + node.name);
//     node.children.forEach(child => printTree(child, indent + "  "));
//   }
  
//   printTree(root);
  
