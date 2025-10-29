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

// Calculate_Mean(numbers)

//write a function that calculate the median of the number data

let number = [12, 43, 33, 27, 78, 65];

function Calculate_Median(arr){
    //first of all arrange data in ascending order

    let sort_data = arr.sort((a,b) => a-b)
    // console.log(sort_data);

    const n = sort_data.length - 1;

    const result = (n / 2);

    // console.log(Math.floor(result));

    let output;

    if((Math.floor(result)) < result){
        output = (arr[Math.floor(result)] + arr[Math.floor(result) + 1]) / 2;
    }

    else{
        output = arr[result];
    }

    console.log('The median is ', output);
}

Calculate_Median(number)