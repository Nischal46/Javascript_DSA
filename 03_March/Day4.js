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

function FactorialNumber(numberofTimes){
    let result = 1;
    for(let i = 2; i <= numberofTimes; i++){

        result = result * i

    }
    return result;
}

console.log(FactorialNumber(4));