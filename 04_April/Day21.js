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