function details() {
  console.log(`${this.x} ----- ${this.y}`);
}

let obj1 = {
  x: "asd",
  y: "fds",
};

let newbinding = details.bind(obj1);
newbinding();

//the concept of binding is determined to use the object properties with the help of this keyword
