//1. write a function to calculate the sum of two numbers


function SumofTwoNumbers(a, b){
    return a + b;
}

console.log(SumofTwoNumbers(4, 5));

//2. write a program to find the maximum number in array

let array1 = [12, 4, 24, 67, 43];

function FindMaxNumber(arr){
    return Math.max(...arr);
}

console.log(FindMaxNumber(array1));

//3. write a program to reverse the string

let string = 'Hello';

function ReverseString(str){
    let reverseString = ""; //if empty string is not defined then it concatenate with undefined.
    let length = str.length;

    for(let i = length - 1; i >= 0; i--){
        reverseString = reverseString + str[i]
    }

    return reverseString;
}

console.log(ReverseString(string));

//alternate
// console.log(string.split('').reverse().join(''));

//4. write a function that takes an array of numbers and return a new array with only even numbers

let array2 = [1, 23, 45, 66, 89, 76, 90];

function SeperateEvenNumbers(arr){
    let evenArray = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenArray.push(arr[i])
        }
    }

    return evenArray;
}

console.log(SeperateEvenNumbers(array2));

//function and its default value parameter

function CinemaTicketing(name, nationality = 'nepali'){
    let price;
    nationality === 'nepali' ? price = 190 : price = 250;
    const stobject = {name, nationality, price};
    console.log(stobject);
}

CinemaTicketing('Ramesh', 'america')

//write aprogram to calculate factorial number

function FactorialNumber(n){
    let result = 1;
    for(let i = 2; i <= n; i++){
        result *= i
        console.log(``);    }

    return result;
}

console.log(FactorialNumber(4));

//write a program to calculate fibonacci series

function FibonacciSeries(n){
const fibarr = [0,1];
for(let i = 2; i < n; i++){
    fibarr[i] = fibarr[i-1] + fibarr[i-2];
}

return fibarr;
}

console.log(FibonacciSeries(9));

//write a program to seperate the prime number and composite number seperate

function Seperation(arr){
    let prime = [];
    let notPrime = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            prime.push(arr[i])
        }
        else {
            notPrime.push(arr[i])
        }
    }

    let returnVal = {prime, notPrime}

    return returnVal;
}

console.log(Seperation([3,4,5,6,7,8,9,10,11,12,13,14,15]));


