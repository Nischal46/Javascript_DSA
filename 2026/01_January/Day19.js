let array = [5, 8, 10, 15, 20, 25, 35, 40];

//LINEAR SEARCH algorithm
//time complexity: O(n)
//space complexity: O(1)

function linearSearchAlgorithm(arr, target){
    let foundPostion = undefined;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]=== target){
            foundPostion = i;
            console.log(`Element found at position: ${foundPostion}`);
            return;
        }
        else{
            console.log(`Element not found at index: ${i}, continuing search...`);
            continue;
        }
    }

    if(foundPostion === undefined){
        console.log('Element not found in the array.');
    }
}

// linearSearchAlgorithm(array, 75);

//BINARY SEARCH algorithm
//time complexity: O(log n)
//space complexity: O(1)

//NOTE: For binary search, the array must be sorted.

function binarySearchAlgorithm(arr, target){
    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target){
            console.log(`Element found at position: ${mid}`);
            return;
        }
        else if(arr[mid] < target){
            console.log(`Searching right half since ${arr[mid]} < ${target}`);
            left = mid + 1;
        }
        else{
            console.log(`Searching left half since ${arr[mid]} > ${target}`);
            right = mid - 1;
        }
    }

    console.log('Element not found in the array.');
}

binarySearchAlgorithm(array, 8);