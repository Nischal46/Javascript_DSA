// this keyword 

//constructor function must be declared by the uppercase namespace 
function Details(brand, manufacturedate){
    this.brand = brand;
    this.year = manufacturedate;
    return this;
}


//new keyword makes new instances for the specific vsriable only it doesnot override the value from
//other variable
const details1 = new Details('saamsung', 2022);
console.log(details1);

const details2 = new Details('iphone', 2023);
console.log(details2);


