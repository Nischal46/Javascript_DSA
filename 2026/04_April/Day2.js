// comparision on the factory function and constructor function 

function Player(name, email) {
  this.name = name;
  this.email = email;

  this.intro = function () {
    console.log("From inside");
  }

}

Player.prototype.sharingFunction = function () {
  console.log("All instance can used this common function");
}

//static method in constructor function 

Player.creditScore = function () {
  console.log("This is static method of constructor function");
}

Player.creditScore();

const constructorPlayer = new Player("nischal", "nischal@gmail.com");
console.log(constructorPlayer);
constructorPlayer.intro();

const constructorPlayer2 = new Player("baniya", "baniya@gmail.com");
console.log(constructorPlayer2)

//console.log(constructorPlayer instanceof Player);

// This is different function not shared
//console.log(constructorPlayer.intro === constructorPlayer2.intro);

//This is same sharing function by prototype 
//console.log(constructorPlayer.sharingFunction === constructorPlayer2.sharingFunction);

//console.log(constructorPlayer.__proto__ === Player.prototype);

//console.log(constructorPlayer.constructor === Player);
//

function Animal(name) {
  this.name = name;
}

Animal.prototype.sounds = function () {
  console.log(`${this.name} makes sound`)
}

function Dog(name, action) {
  Animal.call(this, name, action);
  this.action = action;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const obj = new Dog("Dog", "barks");
console.log(obj);
obj.sounds();


