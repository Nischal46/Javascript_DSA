// creating linked list append new data at n position, delete from n position, traverse

class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(data){
        const newNode = new Node(data);
        if(this.head === null){
            this.head = newNode;
        }
        else{
            let currentNode = this.head;
            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
        }
    }
    delete(position){
        if(position === 1){
            let cur = this.head.next;
            this.head = cur;
        }
    }

    printList(){
        let currData = this.head;

        while(currData !==null){
            process.stdout.write(currData.data + "->");
            currData = currData.next;
        }
        console.log("null\n");
    }
}

const ll = new LinkedList();
ll.append(22);
ll.append(33);
ll.append(44);
ll.printList();
ll.delete(1);
ll.printList();
