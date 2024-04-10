//write a function that calculates the sum of square of all the elements

let original_array = [2, 4, 5]
let total = 0;
//output is expected as 4 + 16 + 25 = 45

function Square_Sum(arr) {
    for (const i of arr) {
        total = total + (i * i)
    }
    return total
}

// console.log(Square_Sum(original_array));

//alternative method

const sum_Square_Total = original_array.reduce(function (acc, elem) {
    return acc + (elem * elem)
}, 0)
console.log(sum_Square_Total);

let array = [12, 15, 16, 18, 21, 25];

const seperate_by_divisor = array.reduce(function (acc, cur) {
    if (cur % 2 === 0) {
        acc.push(`${cur} is divide by 2`);
    }

    if (cur % 3 === 0) {
        acc.push(`${cur} is divided by 3`);
    }

    return acc
}, [])

// console.log(seperate_by_divisor);

//write a function that checks the given string is palindrome or not. Pass the array of multiple string value by use of function


function Check_Palindrome(str_arr) {

    for (const cd of str_arr) {
        let length = cd.length - 1;
        let newstring = ""

        while (length >= 0) {
            newstring += cd[length];
            length--;
        }

        if (cd === newstring) {
            console.log(`${cd} is a palindrome string`);
        }
    
        else {
            console.log(`${cd} is not a palindrome string`);
        }
        newstring = "";
    }

}

let array_String = ['wow', 'racecar', 'songs']

// Check_Palindrome(array_String)

//write a function that arrange the array in ascending sorting whether the input is number or string

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


