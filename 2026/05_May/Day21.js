// Queue concept 

class Queue {
  constructor(sizealloc) {
    this.data = new Array(sizealloc);
    this.front = 0;
    this.rear = 0;
    this.count = 0;
    this.capacity = sizealloc;
  }

  isEmpty() {
    return this.front === 0;
  }

  isFull() {
    return this.rear === this.capacity;
  }

  addElement(elem) {
    if (this.isFull()) {
      console.log("Queue is full. cannot insert any element");
      return;
    }

    this.data[this.rear] = elem;
    this.rear += 1;
    this.count++;
  }

  removeElement() {
    if (this.isEmpty()) {
      console.log("Queue is empty. Cannot remove in blank");
      return
    }

    this.data[this.front] = undefined;
    this.front += 1;
  }
}

const queueAllocator = new Queue(3);
console.log(queueAllocator.data.length);
queueAllocator.removeElement();
queueAllocator.addElement(3);
queueAllocator.addElement(5);
queueAllocator.addElement(7);
queueAllocator.addElement(8);
queueAllocator.removeElement();
console.log("Logging of the queue: ", queueAllocator);
