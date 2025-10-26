//NOTE: Task related with linked list and other dsa problems

//Beginner problems
//Question: Make a linked list and then add 3 node and prepend 1 value

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //serially adding node at last
  append(val) {
    let newnode = new Node(val);
    if (!this.head) {
      this.head = newnode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newnode;
    }
    this.size++;
  }

  prepend(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
}

const node = new LinkedList();
node.append(22);
node.append(33);
node.prepend(5);

// console.log(node);

//Question: Find the second largest element in the array

const numArray = [12, 45, 52, 34, 57];

function FindSecondLargestElement(numArray) {
  let secondhighest;
  numArray.reduce((acc, cv) => {
    if (cv > acc) {
      secondhighest = acc;
      acc = cv;
    }
    return acc;
  }, 0);
  return secondhighest;
}

let result = FindSecondLargestElement(numArray);
console.log("Logging of the second highest number from array ", result);

