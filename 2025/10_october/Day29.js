class Node {
    constructor(data){
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    insertAtFirst(data){
        let newNode = new Node(data);
        if(this.head === null){
            //NOTE: If head null means tail also null and simply list is empty
            this.head = this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode
        }
    }

    insertAtend(data){
        let newNode = new Node(data);
        if(this.tail === null){
            this.head = this.tail = newNode;
        }
        else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }
}

let node = new DoubleLinkedList();
node.insertAtFirst(22);
node.insertAtFirst(32);
node.insertAtFirst(11);
node.insertAtFirst(8);
node.insertAtend(67);
console.log(node);

