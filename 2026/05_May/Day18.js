// single queue concept 

class Queue {
  constructor(noofalloc) {
    this.data = new Array(noofalloc);
    this.front = 0;
    this.rear = 0;
    this.queueCapacity = noofalloc;
    this.size = 0;
  }

  isqueuefull() {
    return this.queueCapacity === this.size;
  }

  isqueueempty() {
    return this.data.length === 0;
  }

  addelementinqueue(element) {

    if (this.isqueuefull()) {
      console.log("Queue is full");
      return;
    }

    this.data[this.rear] = element;
    this.rear += 1;
    this.size += 1;
  }

  removveelementinqueue() {
    if (this.isqueueempty()) {
      console.log("Queue is empty. Cannot remove in empty");
      return;
    }
    this.data[this.front] = undefined;
    this.front += 1;
  }
}

const queueconcept = new Queue(2);
queueconcept.addelementinqueue(3);
queueconcept.addelementinqueue(4);
queueconcept.addelementinqueue(5);
queueconcept.addelementinqueue(7);
queueconcept.removveelementinqueue();

console.log(queueconcept);
