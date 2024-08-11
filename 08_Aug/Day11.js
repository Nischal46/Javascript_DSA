// split and join concept

const username = 'nischal baniya';

const splitmethod = username.split(" ");

const fulloutput = splitmethod.join(",");

console.log(`The name is ${fulloutput}`);

// if we want to target specific object properties and not to be mutated

let filmObject = {
    name: "Mad Max",
    duration: 68,
    "country": "America"
}

console.log(filmObject.name);
console.log(filmObject["country"]);

let string = 'white board';

let letterCount = {}
let count = 0
for(const x of string){
    if(!letterCount[x]){
        letterCount[x] = 1;
    }
    else {
        letterCount[x] += 1;
    }
}

console.log(letterCount);


// returning the second largest number from array and if not return null;

function findSecondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }

    let first = null;
    let second = null;

    for (const num of arr) {
        if (num > first) {
            second = first;
            first = num;
        } else if (num < first && (second === null || num > second)) {
            second = num;
        }
    }

    return second;
}

// Test cases
console.log(findSecondLargest([10, 20, 20, 8, 15])); // Output: 15
console.log(findSecondLargest([5, 5, 5]));           // Output: null
console.log(findSecondLargest([1, 2, 3, 4, 5]));     // Output: 4
console.log(findSecondLargest([5]));                 // Output: null
console.log(findSecondLargest([9, 9, 8, 7, 7]));     // Output: 8

}

