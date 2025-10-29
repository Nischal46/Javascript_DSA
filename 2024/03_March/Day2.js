//algorithm function to check the poweer of Two

function isPowerofTwo(n){
    if(n < 1) return false; //immediately return the false if the n valuee is less than 1

    while(n > 1){
        if(n%2 !== 0) return false;
        console.log('value of n is', n);
        n = n / 2;
    }

    return true
}

console.log(isPowerofTwo(1));
console.log(isPowerofTwo(3));
console.log(isPowerofTwo(4));
console.log(isPowerofTwo(7));

//check the n no of factorial

function checkFactorialNum(n){
    let result = 1;
    for(let i = 2; i <= n; i++){
        result = result * i;
    }

    return result
}

console.log(checkFactorialNum(4));

//check fibonacci series
function fibonacciSeries(n){
    const fib = [0, 1];
    for(let i = 2; i <= n; i++){
        fib[i] = fib[i-2] + fib[i-1]
    }
    return fib
}
console.log(fibonacciSeries(5));

//count the repeat of the letter in string

function countcheckLetter(str){
    let letterCount = {}
    for(let i = 0; i < str.length; i++){
       
        if(!letterCount[str[i]]) letterCount[str[i]] = 1;

        else letterCount[str[i]]++;
        
    }
    console.log(letterCount);
}

countcheckLetter('subconcious');

//algorithm to reverse the string

function reverseString(str){
    let reverse_str = ""
    for(let i = str.length; i >= 0 ; i--){
        reverse_str += str[i]
    }

    console.log(reverse_str);
}

reverseString("Coding Everyday")


