//bubble sort algorithm to sort the array

function BubbleSort(array){
    let swapped;
    do{
        swapped = false
        for(let i = 0; i <array.length; i++){
            if(array[i] > array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    }
    while(swapped)
    return array
}

console.log(BubbleSort([-2, -6, 5, 3, 9, 8]));

// time complexity: O(n^2)

//print factorial number of n no

function FactorialNumber(no){
    let result = 1;
    for(let i = 2; i <= no; i++){
        result *= i;
    }

    return result;
}

console.log(FactorialNumber(4));

// time complexity: O(n)

function FibonacciSeries(no){
    const fibarr = [0, 1];

    for(let i = 2; i <= no; i++){
        fibarr[i] = fibarr[i-1] + fibarr[i-2]
    }

    return fibarr;
}

console.log(FibonacciSeries(5));

//insertion sort of the array

function InsertionSort(array){
for(let i = 1; i < array.length; i++){
    let numtoinsert = array[i];
    let j = i -1;
    while(j >= 0 && array[j] > numtoinsert){
        array[j+1] = array[j]
        j = j - 1;
    }
    array[j+1] = numtoinsert
}
return array
}

console.log(InsertionSort([-1, -5, 8, 4, -3, 6]));