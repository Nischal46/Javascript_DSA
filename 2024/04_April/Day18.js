// write a function that counts the reepeatance of the number data in array

function countRepeatance(arr) {
    let countMap = {};

    for (const num of arr) {
        if (countMap[num]) {
            countMap[num] += 1;
        } else {
            countMap[num] = 1;
        }
    }

    return countMap;
}

let array = [12, 23, 42, 12, 54, 23, 23, 65, 76];
let result = countRepeatance(array);
console.log(result);

//write a function that only sum the positive number and avoid negative number in array

function sumOfPositive(arr) {
    let sum = 0;
    for (const num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}

let array2 = [-1, 2, -3, 4, -5, 6];
console.log(sumOfPositive(array2)); // Output: 12

