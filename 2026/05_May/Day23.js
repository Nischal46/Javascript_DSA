class Queue {
  constructor(allocsize) {
    this.data = new Array(allocsize);
    this.front = 0;
    this.rear = 0;
    this.size = 0;
    this.capacity = allocsize
  }

  isEmpty() {
    if (this.size === 0) {
      console.log("Queue is empty");
      return;
    }
  }

  isFull() {
    if (this.rear === this.capacity) {
      console.log("Queue id full");
      return;
    }
  }

  addElement(elem) {
    if (this.isFull()) {
      return;
    }

    this.data[this.rear] = elem;
    this.rear++;
    this.size++;
  }

  removeElement() {
    if (this.isEmpty()) {
      return;
    }

    this.data[this.front] = undefined;
    this.front++;
  }
}

const qconcept = new Queue(3);
qconcept.removeElement();

qconcept.addElement(34);
qconcept.addElement(45);
qconcept.addElement(67);
qconcept.addElement(68);

console.log("Queue concept : ", qconcept);
