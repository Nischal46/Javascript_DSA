// implementation of the double linked list

class Node {
    constructor(value) {
        this.data = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(value){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }
}

const dll = new DoubleLinkedList();
dll.append(34);
dll.append(54);
dll.append(65);

console.log(dll);