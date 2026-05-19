// Double-Ended Queue Implementation (JavaScript)
class Deque {
  constructor(size = 10) {
    this.items = new Array(size);
    this.front = -1;
    this.rear = 0;
    this.size = 0;
    this.capacity = size;
  }

  // Add to front
  addFront(item) {
    if (this.isFull()) {
      console.log("Deque Overflow");
      return;
    }
    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.front === 0) {
      this.front = this.capacity - 1;
    } else {
      this.front--;
    }
    this.items[this.front] = item;
    this.size++;
  }

  // Add to rear
  addRear(item) {
    if (this.isFull()) {
      console.log("Deque Overflow");
      return;
    }
    if (this.front === -1) {
      this.front = 0;
      this.rear = 0;
    } else if (this.rear === this.capacity - 1) {
      this.rear = 0;
    } else {
      this.rear++;
    }
    this.items[this.rear] = item;
    this.size++;
  }

  // Remove from front
  removeFront() {
    if (this.isEmpty()) {
      console.log("Deque Underflow");
      return undefined;
    }
    const item = this.items[this.front];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.front === this.capacity - 1) {
      this.front = 0;
    } else {
      this.front++;
    }
    this.size--;
    return item;
  }

  // Remove from rear
  removeRear() {
    if (this.isEmpty()) {
      console.log("Deque Underflow");
      return undefined;
    }
    const item = this.items[this.rear];
    if (this.front === this.rear) {
      this.front = -1;
      this.rear = -1;
    } else if (this.rear === 0) {
      this.rear = this.capacity - 1;
    } else {
      this.rear--;
    }
    this.size--;
    return item;
  }

  // Peek front
  peekFront() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return undefined;
    }
    return this.items[this.front];
  }

  // Peek rear
  peekRear() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return undefined;
    }
    return this.items[this.rear];
  }

  // Check if empty
  isEmpty() {
    return this.size === 0;
  }

  // Check if full
  isFull() {
    return this.size === this.capacity;
  }

  // Get current size
  getSize() {
    return this.size;
  }

  // Print deque contents
  print() {
    if (this.isEmpty()) {
      console.log("Deque is empty");
      return;
    }
    console.log("Deque contents (front to rear):");
    let i = this.front;
    let count = 0;
    while (count < this.size) {
      console.log(this.items[i]);
      i = (i + 1) % this.capacity;
      count++;
    }
  }
}

// Usage
const deque = new Deque(5);
deque.addRear(10);
deque.addFront(20);
deque.addRear(30);
console.log("Front element:", deque.peekFront()); // 20
console.log("Rear element:", deque.peekRear());   // 30
console.log("Deque size:", deque.getSize());      // 3
deque.print();
deque.removeFront();
console.log("After removeFront, front element:", deque.peekFront()); // 0
