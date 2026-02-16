//mixins concept is whhere there is object which contains of method and later merge with class proptotype

const myCustomObject = {
  sayHi(){
    console.log(`Hello ${this.name}, Hi`);
  },
  sayBye(){
    console.log("Hello Bye")
  }
}

class Greetings {
  constructor(name){
    this.name = name;
  }
}

Object.assign(Greetings.prototype, myCustomObject);

new Greetings("Nischal").sayHi();
