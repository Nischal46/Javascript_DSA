class Reactangle{
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }

    getDetails(){
        console.log(`
        Rectangle Details:
        Length: ${this.length} cm
        Breadth: ${this.breadth} cm
        `);
    }
}

class Area extends Reactangle{
    constructor(length, breadth){
        super(length, breadth);
    }

    area(){
        console.log(`Area of rectangle: ${this.length * this.breadth} cm^2`);
    }
}

const obj = new Area(4, 5);
obj.area();
obj.getDetails();