// NOTE: Concept Linked List

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SingleLinkedListConcept {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  addNode(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.size++;
  }

  remove(val) {
    if(!this.head) return;

    if(this.head.data = val){
        this.head = this.head.next;
        this.size--;
        return;
    }

    let currentNode = this.head;
    while(currentNode.next && currentNode.next.data !== val){
        currentNode = currentNode.next;
    }

    if(currentNode.next){
        currentNode.next = currentNode.next.next;
        this.size--;
    }

  }
}

let node = new SingleLinkedListConcept();
node.addNode(3);
node.addNode(5);
node.addNode(6);

node.remove(5);

console.log("logging node ---", node);
