// write a function that counts a fibonacci series

function fibonacci_Series(no){
    let arr = [0, 1];

    for(let i = 2; i < no; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }

    return arr;
}

console.log(fibonacci_Series(7));