//tree data structure

class Node{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class Binary_Search_Tree{
    constructor(){
        this.root = null
    }

    isEmptyNode(){
        return this.node === null;
    }

    declareNode(val){
        //this is the mechanism to make a root node
        let newNode = new Node(val);
        this.root === null ? this.root = newNode : this.insertNode(this.root, newNode);
    }

    insertNode(root, newNode){
        if(root.value > newNode.value){
            root.left === null ? root.left = newNode : this.insertNode(root.left, newNode);
        }

        else{
            root.right === null ? root.right = newNode : this.insertNode(root.right, newNode)
        }
    }
}

// const obj = new Binary_Search_Tree();
// // console.log(obj.isEmptyNode());

// obj.declareNode(23);
// obj.declareNode(33);
// obj.declareNode(12);

// console.log(obj);

class Registration{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password || null
    }
}

class GmailRegistration extends Registration{
    constructor(name, email){
        super(name, email)
        this.Loggedin = "Gmail"
    }
}

const obj = new GmailRegistration('Nischal Baniya', 'baniyanisal12@gmail.com');
console.log(obj);