// finding the factorial number

function FibonacciSeries(n){
    
    let arr = [0, 1];

    for(let i = 2; i <= n; i++){
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr;
}

console.log(FibonacciSeries(4)) 

function FactorialNumber(n){

    let result = 1;

    for(let i = 2; i <= n; i++){
        result = result * i;
    }

    return result;
}

console.log(FactorialNumber(4));
