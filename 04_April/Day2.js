//using OOP calculate the area of perimeter of rectangle and square

class Area{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;

        this.details = function(){
            console.log(`Area of rectangle = ${this.length} * ${this.breadth} = ${this.length * this.breadth} cm^2`);
        }
    }

}

class Perimeter{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }
}

class Rectangle extends Area{
    constructor(length, breadth){
        super(length, breadth);
    }
}

const obj1 = new Rectangle(4, 2);
console.log(obj1);
obj1.details();

// class Rectangle extends Perimeter{}



