//LinkedList

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data, position) {
    let newNode = new Node(data);
    if (position === 1) {
      if (this.head === null) {
        this.head = newNode;
      } else {
        let currentNode = this.head;
        this.head = newNode;
        this.head.next = currentNode;
      }
    } else {
      let currentNode = this.head;
      if (position === undefined) {
        while (currentNode.next !== null) {
          currentNode = currentNode.next;
        }
        currentNode.next = newNode;
      } else {
        let previousNode = null;
        for(let i = 1; i < position; i++){
            if(i === position)
        }
      }
    }
  }

  delete() {}
}
