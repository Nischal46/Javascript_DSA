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

const obj1 = new SubClass('nischal', 2021, 'lalitpur', 'IT professor');
console.log(obj1);