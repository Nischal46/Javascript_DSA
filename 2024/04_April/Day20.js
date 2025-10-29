class BaseClass{
    constructor(name, joining_year, address){
        this.name = name;
        this.joining_year = joining_year;
        this.address = address;
    }
}

class SubClass extends BaseClass{
    constructor(name, joining_year, address, profession){
        super(name, joining_year, address);
        this.profession = profession;
    }
}

// const obj1 = new SubClass('nischal', 2021, 'lalitpur', 'IT professor');
// console.log(obj1);

let innerArray = [12, 43, 56, [42, 56, 76]];


//flatmap is to eleimnate and store the data in single array if there is existed of inner array.
//this works for only one nested array.

const singleArray = innerArray.flatMap(cl => cl);
console.log(singleArray);

let innerarray2 = [23, 54, 65, 33, [89, 90, 12, [34, 66]]]

// const newarray = innerarray2.flatMap(cl => cl);

// console.log(newarray);

const flatarray = innerarray2.flat(2);
console.log(flatarray);

