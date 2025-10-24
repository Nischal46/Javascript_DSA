//NOTE: linked list

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    append(value){
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
        }
        else{ 
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
    }

    printList() {
        let current = this.head;
        let result = "";
        while (current) {
          result += current.value + " -> ";
          current = current.next;
        }
        console.log(result + "null");
    }

    find(value){
        let current = this.head;
        while(current){
            if(current.value === value) return current;
            current = current.next;
        }
        return null;
    }
}

let node = new LinkedList();
node.append(12);
node.append(23);
node.append(33);
node.append(43);
node.append(53);
node.append(63);
node.printList();
console.log(node.find(23));