// stack concept 

class StackConcept {
  constructor() {
    this.items = []
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.items.length === 0) {
      return "stack is empty";
    }
    else {
      return this.items.pop();
    }
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items);
  }
}

const stackObj = new StackConcept();
stackObj.push(23);
stackObj.push(45);
stackObj.print();

//all of the operations(push, pop, size) have 0(1) time complexity

//problems related

//reverse a string

function reverseString(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    stack.push(s[i]);
  }

  const var_to_hold_reverse_char = new Array(s.length);

  for (let i = 0; i < s.length; i++) {
    var_to_hold_reverse_char[i] = stack.pop();
  }

  return var_to_hold_reverse_char.join('');
}

console.log(reverseString("practice daily"))
