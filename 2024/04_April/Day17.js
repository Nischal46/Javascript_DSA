// tree data structure

class Node{
    constructor(val){
        this.root = val;
        this.left = null;
        this.right = null;
    }
}

class Binary_Search_Tree{
    construcror(){
        this.root = null;
    }

    isEmptyNode(){
        return this.root === null
    }

    Root_Node_Declare(val){
        let newNode = new Node(val);
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
}

const obj = new Binary_Search_Tree();
console.log(obj.isEmptyNode());