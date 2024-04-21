// write a function that returns a Fibonacci series

function FibonacciSeries(n){
    const arr = [0,1]

    for(let i = 2; i <= n; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }

    return arr;
}

// console.log(FibonacciSeries(6));

//write a function that checks whether the string first letter is uppercase or not

function CheckLowercase(arr){
    for(const i of arr){
        if(i[0] === i[0].toUpperCase()){
            console.log(`${i} is uppercase`);
        }
        else{
            console.log(`${i} is not upeercase`);
        }
    }
}

const stringArray = ['Good', 'excellent', 'Calendar', 'mobile', 'Hard work']
CheckLowercase(stringArray)

//adding of the number input

function AddingNumber(num){
    let numtostring = Array.from(String(num))
    let total = 0

    for(const i of numtostring){
        total = total + (+i)
    }

    return total
}

// console.log(AddingNumber(23456));

//adding, deleting, updating and searching of the data in array

let array = [32, 43, 56, 88, 26, 83];

function AddingElement(newelement, position){
    for(let i = array.length - 1; i >= 0; i--){
        if(i >= position){
            array[i+1] = array[i]

            if(i === position){
                array[i] = newelement
            }
        }
    }

    return array
}

// console.log(AddingElement(77, 2));

//alternative splice method

let addeddata = array.splice(2, 0, 77);
console.log(addeddata);

let deleteData = array.shift() //this is to remove the first element from the array
console.log(deleteData);

let deletelastData = array.pop();// this is to delete the last element of the array
console.log(deletelastData);

array.splice(1, 2); //this is to delete the data from random place
console.log(array);


let original_array = [12, 43, 22, 54, 67, 47, 98];
let updatearray = [];

for(let i = 0; i <= original_array.length - 1; i++){
    if(original_array[i] === 22){
        original_array[i] = 27
    }
    else{
        original_array[i] = original_array[i]
    }
}

console.log(original_array);