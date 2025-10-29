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

//algorithm for the deletion of the data in array

let arr = [56, 89, 92, 44];

//to have modified of the array, it must be declared by let or var.
//incase we use const then we cannot mutate the actual array
//using builtin filter array method delete the data inside of array
arr = arr.filter(item => item !== 89);
console.log(arr);


let newarray = [34, 65, 33, 21, 63, 4, 78];
let greaterthan40 = []

//delete number that are lesser than 40

for(let i = 0; i < newarray.length; i++){
    if(newarray[i] > 40){
        console.log(`${newarray[i]} is greater than 40`);
        greaterthan40.push(newarray[i])
    }
}
console.log('number greater than 20 are ', greaterthan40);

//for in loop

let array1 = ['samsung', 'oppo', 'iphone', 'mi'];

//for in we have to give the array index
for (let i in array1){
    console.log(array1[i]);
}

//for of automatcally detect the index value and we could only give index
for (let i of array1){
    console.log(i);
}


