//dsa: tree concept

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
    }
}

const obj = new BinarySearchTree()
obj.rootNode(12);
obj.rootNode(7);

console.log(obj);