//Queue concept - FIFO

class Queue {
  constructor(){
    this.items = [54, 65, 76];
  }

  enqueue(data){
    this.items.push(data)
  }

  dequeue(){
    this.items.shift();
  }

  peek(){
    return this.items[0];
  }
}

const enq = new Queue();
enq.enqueue(22);
enq.enqueue(43);
enq.dequeue();
console.log(enq.peek());
console.log(enq)
