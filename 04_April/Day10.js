//write a function that calculates the sum of square of all the elements

let original_array = [2,4,5]
let total = 0;
//output is expected as 4 + 16 + 25 = 45

function Square_Sum(arr){
    for(const i of arr){
        total = total + (i*i)
    }
    return total
}

// console.log(Square_Sum(original_array));

//alternative method

const sum_Square_Total = original_array.reduce(function(acc, elem){
    return acc + (elem*elem)
}, 0)
console.log(sum_Square_Total);
