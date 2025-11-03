//NOTE: Implementation of Double Linked list as it can traverse for both forward and backward node

class Node {
    constructor(data) {
      this.data = data;
      this.previous = null;
      this.next = null;
    }
  }
  
  class DoubleLinkList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  
    appendAtFirst(val) {
      let newNode = new Node(val);
      if (this.head === null) {
        this.head = this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
      }
    }
  
    appendAtLast(val) {
      let newNode = new Node(val);
      if (this.tail === null) {
        this.tail = this.head = newNode;
      } else {
        newNode.previous = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
      }
    }
  
    appendAtSpecificPosition() {}
  }
  
  const dll = new DoubleLinkList();
  dll.appendAtFirst(4);
  dll.appendAtFirst(3);
  dll.appendAtLast(7);
  dll.appendAtFirst(2);
  
  console.log(dll);
  