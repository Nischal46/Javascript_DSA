// write a function that counts a fibonacci series

function fibonacci_Series(no){
    let arr = [0, 1];

    for(let i = 2; i < no; i++){
        arr[i] = arr[i-1] + arr[i-2]
    }

    return arr;
}

console.log(fibonacci_Series(7));

//write a function that display factorial number

function Sorting_function(arr){

    for(let i = 0; i <= arr.length - 1; i++){
        for(let j = 0; j <= arr.length - 1; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;

}

console.log(Sorting_function([23,12,4,8,9,56,35]));