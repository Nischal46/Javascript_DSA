/*
Question no 1
write a program to print the n no of fibonacci sereies

Question no 2
Write a program to print n no of factorial number

Question no 3
write a program to search element using linear search in array

Question no 4
write a program to search element by using binary search in array
*/

//solution no 1

function FibonacciSeries(numberoftimes){
    const fibarr = [0, 1]; // first declare array with two initial value

    for(let i = 2; i <= numberoftimes; i++){
        fibarr[i] = fibarr[i-1] + fibarr[i-2]
        console.log(`Sum of ${fibarr[i-1]} and ${fibarr[i-2]} = ${fibarr[i]}`);
    }

    return fibarr;

}

console.log(FibonacciSeries(6));

// solution no 2

function FactorialNumber(numberofTimes){
    let result = 1;
    for(let i = 2; i <= numberofTimes; i++){

        result = result * i

    }
    return result;
}

console.log(FactorialNumber(4));

// solution no 3

function LinearSearch(arr, target){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === target){
            return i;
        }
    }
}

let array2 = [5,8,3,1,4,12,6]

console.log(LinearSearch(array2, 4));


// solution no 4

function CheckBinarySearch(arr, target){
    let leftpointer = 0;
    let rightpointer = arr.length - 1;

    while(leftpointer <= rightpointer){
        let middlepointer = Math.floor((leftpointer + rightpointer) / 2);

        if(target === arr[middlepointer]){
            return middlepointer;
        }

        if(target < arr[middlepointer]){
            rightpointer = middlepointer - 1;
        }

        else {
            leftpointer = middlepointer + 1;
        }
    }

    return "Not Found"
}

let array1 = [12, 25, 36, 47, 58, 60, 79]
console.log(CheckBinarySearch(array1, 79));