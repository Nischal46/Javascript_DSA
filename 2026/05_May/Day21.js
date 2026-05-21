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
}

const queueAllocator = new Queue(3);
queueAllocator.addElement(3);
queueAllocator.addElement(5);
queueAllocator.addElement(7);
queueAllocator.addElement(8);
console.log("Logging of the queue: ", queueAllocator);
