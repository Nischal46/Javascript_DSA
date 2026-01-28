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
      const newNode = new Node(data);
      if (position === 1) {
        if (this.head === null) {
          this.head = newNode;
        } else {
          let swap = this.head;
          this.head = newNode;
          this.head.next = swap;
        }
      } else {
        if (position === undefined) {
          let currentNode = this.head;
          while (currentNode.next !== null) {
            currentNode = currentNode.next;
          }
          currentNode.next = newNode;
        } else {
          let prevNode = null;
          let currentNode = this.head;
          for (let i = 1; i < position; i++) {
            if (i === position) {
              
            } else {
              prevNode = currentNode;
              currentNode = currentNode.next
            }
          }
        }
      }
    }
  
    remove(position) {}
  }
  
  const ll = new LinkedList();
  ll.append(22, 1);
  ll.append(34, 1);
  ll.append(45, 1);
  ll.append(56,2);
  
  console.dir(ll, { depth: Infinity });
  