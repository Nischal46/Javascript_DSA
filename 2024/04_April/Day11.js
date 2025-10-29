//write a function that takes an array of element as input and return the minimum value from the array

function FindMinimum(arr){
    let smallest_value;
    smallest_value = arr[0]

    for(const i of arr){
        // if(smallest_value < i) console.log(`${smallest_value} is smaller than ${i}`);
        // else console.log(`${smallest_value} is greater than ${i}`);

        if(smallest_value > i) smallest_value = i
    }

    return smallest_value
}

console.log(FindMinimum([12, 7, 10, 35, 23, 3]));