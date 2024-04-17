// tree data structure

class Binary_Search_Tree{
    construcror(){
        this.root = null;
    }

    isEmptyNode(){
        return this.root === null
    }
}

const obj = new Binary_Search_Tree();
console.log(obj.isEmptyNode());