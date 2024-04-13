//dsa: tree concept
const util = require('util');

class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    isEmptyNode(){
        return this.root === null;
    }

    rootNode(val){
        let newNode = new Node(val)
        this.root === null ? this.root = newNode : this.insertNode(this.root, newNode)
    }

    insertNode(root, newNode){
        if(root.value > newNode.value){
            root.left === null ? root.left = newNode : this.insertNode(root.left, newNode) 
        }
        else{
            root.right === null ? root.right = newNode : this.insertNode(root.right, newNode)
        }
    }

    searchNode(root, val){
        if(root === null) return "Not found";

        else if(root.value === val) return "Search found."

        else if(root.value > val) return this.searchNode(root.left, val)

        else return this.searchNode(root.right, val)
    }
}

const obj = new BinarySearchTree()
obj.rootNode(12);
obj.rootNode(7);
obj.rootNode(15);
obj.rootNode(5)
console.log(obj.searchNode(obj.root, 17));

// console.info(obj.isEmptyNode());