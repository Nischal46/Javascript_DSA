//to have binary search algorithm in array it must be sorted
let array = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];

//BINARY SEARCH algorithm
//time complexity: O(log n)
//space complexity: O(1)

function binarySearchAlgorithm(arr, target){
    let startingIndex = 0;
    let endingIndex = arr.length - 1;

    while(startingIndex <= endingIndex){
        let middleIndex = Math.floor((startingIndex + endingIndex) / 2);

        if(arr[middleIndex] === target){
            console.log(`Element found at position: ${middleIndex}`);
            return;
        }
        else if(arr[middleIndex] < target){
            console.log(`Searching right half since ${arr[middleIndex]} < ${target}`);
            startingIndex = middleIndex + 1;
        }
        else{
            console.log(`Searching left half since ${arr[middleIndex]} > ${target}`);
            endingIndex = middleIndex - 1;
        }
    }

    console.log('Element not found in the array.');
}

binarySearchAlgorithm(array, 27);