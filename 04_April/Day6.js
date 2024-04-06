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

// const obj = new Area(4, 5);
// obj.area();
// obj.getDetails();


//using the flatmap concept

const data = [1,2, [5,6], [7,8, [12, 14]]]
console.log(data);
const singlearray = data.flat(2)
console.log(singlearray);
// using the flat method we can dive deeper

const flatmap = data.flatMap((pd) => pd);
console.log(flatmap);
//using the flatmap concept we can dive onto only 1 state.

const numarray = [1,2,3,4,5,6,7,8,9];

const num1 = numarray.reduce((acc, pd) => {
    if(pd > 5) return [...acc, pd]
    else return acc
}, [])

console.log(num1);

const studentarray = [
    {name: 'nischal', faculty: 'IT'},
    {name: 'parina', faculty: 'BBA'},
    {name: 'pradip', faculty: 'MBA'},
    {name: 'suresh', faculty: "IT"}
]

const it_array = studentarray.reduce(function(acc, cur){
    if(cur.faculty === "IT") return [...acc, cur];
    else return acc;
}, []);

console.log(it_array);
