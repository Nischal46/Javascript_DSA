// define a function whether the number is prime or not

function CheckPrimeOrNot(arr){
    for(const x of arr){
        if(x%2 === 0) console.log(`${x} is a prime number`);
        else console.log(`${x} is not prime number`);
    }
}

CheckPrimeOrNot([23, 44, 1, 3, 4, 5, 6, 7, 8, 9, 11, 13])