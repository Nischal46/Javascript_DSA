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

let array = [12,23,34,54,65,76,44]

function AddElement(n){
    for(let i = array.length - 1; i >= 0; i--){
        if(i >= n){
            array[i+1] = array[i]
            if(i === n){
                array[i] = 48
            }
        }
    }
    return array;
}

console.log(AddElement(3));
