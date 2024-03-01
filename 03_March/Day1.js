// Algorithm consists of three different terms as they are input, condition and output
// Algorithm is differentiate into two different types as they are time complexity and space complexity

//time complexity refers to the amount of the time that takes the algorithm to run
//space complexity refeeers to the amount of the memory that takes the algorithm to run

//representing of the algorithm is done by the asymptotic notations
// big O, Omega and Theta complexity notations

//problem no 1 to find the complexity of the program

function fibonacciNum(n){
    const startTime = performance.now();
    const fib = [0,1];
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    const endTimee = performance.now();
    console.log(`Time execution taken to complete is ${endTimee - startTime}`)
    return fib
}

console.log(fibonacciNum(5));
// console.log(fibonacciNum(10));

function fibonacciNum(n){
    let i = 2;
    const fib = [0, 1]
    while(i < n){
        
        fib[i] = fib[i-1] + fib[i-2]
        i++
    }

    return fib
}
console.log(fibonacciNum(5));

//Note both the loop that for and while are linear time complexity






