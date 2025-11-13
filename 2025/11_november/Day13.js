//revising tree data structure

class Node {
    constructor(title, isFile = false){
        this.title = title;
        this.isFile = isFile;
        this.children = [];
    }

    append(childNode){
        if(!this.isFile) this.children.push(childNode);
    }
}

const root = new Node("Nischal System");

const firstLevelNode = [new Node("Coding"), new Node("Desktop"), new Node("Pictures"), new Node("Videos")]

for(let i=0; i<4; i++){
    root.append(firstLevelNode[i]);
}

console.dir(root, {depth: Infinity});