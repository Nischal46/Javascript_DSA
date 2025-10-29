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

//check if the triangle is isosceles triangle, equilateral triangle or right angle triangle

class Triangle{
    constructor(a, b, c){
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getdetails(){
        if(this.a === this.b && this.a === this.c){
            console.log('Equilateral Triangle');
        }

        else if(this.a === this.b || this.a === this.c || this.b === this.c){
            console.log('Isosceles Triangle');
        }

        else{
            console.log('Right Angle Triangle');
        }
    }
}

const obj = new Triangle(3,7,3);
obj.getdetails();

const unsortedArray = [43, 23, 12, 55, 26];

const sortedArray = unsortedArray.sort();
console.log(sortedArray);

const unsortedName = ['ram', 'hari', 'laxman', 'eklavya', 'kumar', 'ganesh', 'krishna', 'bishnu', 'shiva'];

const sortedName = unsortedName.sort((a,b) => a.localeCompare(b));
console.log(sortedName);

//chech whether the string is palindrome or not

const originalstring = "racecar";

const wordlength = originalstring.length;
// console.log(wordlength);
let reverse_string = "";

for(let i = wordlength - 1; i >= 0; i--){
    reverse_string = reverse_string + originalstring[i];
}

// console.log(reverse_string);
if(originalstring === reverse_string){
    console.log('String is palindrome');
}
else{
    console.log('String is not Palindrome');
}
