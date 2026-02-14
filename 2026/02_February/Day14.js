//stack concept 

class Stack {
  constructor(){
    this.array = [36,76,73];
  }

  push(element){
    this.array.push(element);
  }

  pop(){
    this.array.pop();
  }
}

const stackConcept = new Stack();
stackConcept.push(34);
stackConcept.push(65);
stackConcept.pop();

console.log(stackConcept)
