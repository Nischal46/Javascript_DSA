// TODO: Implementation of the circular queue using array concept 
// Linear queue 

class myQueue {
  constructor(capacity) {
    //capacity determines the capacity of array 
    this.capacity = capacity;
    this.arr = new Array(capacity);
    this.size = 0;
    this.front = 0;
    this.rear = 0;
  }

  isQueueFull() {
    return this.size === this.capacity;
  }

  isQueueEmpty() {
    return this.size === 0;
  }

  enqueue(elem) {
    if (this.isQueueFull()) {
      console.log("Queue full.");
      return;
    }

    this.arr[this.rear] = elem;
    this.rear++;
    this.size++;
  }

  dequeue() {
    if (this.isQueueEmpty()) {
      console.log("Queue empty.");
      return;
    }

    this.arr[this.front] = undefined;
    this.front++;
    this.size--;
  }
}

const obj = new myQueue(4);
obj.enqueue(12);
obj.enqueue(23);
obj.dequeue();
obj.enqueue(34);
obj.enqueue(45);
obj.enqueue(56);
obj.enqueue(78);
obj.dequeue();

console.log(obj);


