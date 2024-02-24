// Question no 1
// Create a class named 'Student' with a string variable 'name' and an integer variable 'roll_no'. 
// Assign the value of roll_no as '2' and that of name as "John" by creating an object of the class Student.

class Student{
    constructor(name, rollno){
        this.name = name;
        this.rollno = rollno
    }
}

//nwe keyword automatically empty object instances and push the attribute related with this keyword to object
// const stobject = new Student('John', 2);
// console.log(stobject);

//Question no 2
//Assign and print the roll number, phone number and address of two students having names "Sam" and "John" 
//respectively by creating two objects of the class 'Student'.

class StudentDetails{
    constructor(name, phoneNumber, address){
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}

const stdetails1 = new StudentDetails('Sam', 9874653456, 'Kathmandu');
const stdetails2 = new StudentDetails('John', 9834567834, 'Bhaktapur');

// console.log(stdetails1, stdetails2)

//Write a program to print the area and perimeter of a triangle having sides of 3, 4 and 5 units by creating a class 
//named 'Triangle' with a function to print the area and perimeter.

class Triangle{
    constructor(side1, side2, side3){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    Area(){
        const area = `${(this.side1 + this.side2 + this.side3)/2} cm^2`
        console.log(area);
        return this;
    }

    Perimeter(){
        const perimeter = `${(this.side1 + this.side2 + this.side3)} cm`
        console.log(perimeter);
        return this;
    }
}

const triangle1 = new Triangle(3, 4, 5).Area().Perimeter();
// console.log(triangle1);

//Question no 4
//Write a program to print the area of two rectangles having sides (4,5) and (5,8) respectively by creating a class 
//named 'Rectangle' with a function named 'Area' which returns the area. Length and breadth are passed as parameters to its constructor

class Rectangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }

    Area(){
        const rectangle = `Area of rectangle: ${2*(this.length + this.breadth)} cm^2`;
        return rectangle
    }
}

const rect_obj = new Rectangle(4, 5).Area();
console.log(rect_obj);
