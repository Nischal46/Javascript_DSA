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
