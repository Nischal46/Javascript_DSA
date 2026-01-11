//making node
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//declaring class
class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }

  remove(position) {
    let temp = this.head;

    if (position === 1) {
      this.head = temp.next;
      return this.head;
    }

    let prev = null;
    for (let i = 1; i < position; i++) {
      prev = temp;
      temp = temp.next;
    }

    prev.next = temp.next;
    return this.head;
  }

  print() {
    let curr = this.head;
    while (curr !== null) {
      process.stdout.write(`[${curr.data}]` + "->");
      curr = curr.next;
    }
    console.log("null");
  }
}

let ll = new LinkedList();
ll.append(22);
ll.append(34);
ll.append(46);

console.dir(ll, { depth: Infinity });
ll.print();

ll.remove(3);
ll.append(56);
ll.append(67);

console.dir(ll, { depth: Infinity });
ll.print();
