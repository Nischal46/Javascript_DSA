//write a function that calculate the mean of the array data

let numbers = [22, 42, 52, 62, 64];

function Calculate_Mean(arr_num){
    let arr_sum = arr_num.reduce((acc, cur) => {
        return acc + cur;
    }, 0)

    let arr_length = arr_num.length - 1;

    let result = arr_sum / arr_length;

    console.log('The final result of mean is ', result);
}

Calculate_Mean(numbers)