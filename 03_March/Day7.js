//create a function that search a element on array by binary search algorithm

function binarySearchAlgorithm(arr, target){
    let leftpointer = 0;
    let rightpointer = arr.length - 1;

    while(leftpointer <= rightpointer){
        let middlepointer = Math.floor((leftpointer + rightpointer) / 2);

        if(target === arr[middlepointer]){
            return middlepointer;
        }

        else if(target < arr[middlepointer]){
            rightpointer = middlepointer - 1;
        }

        else {
            leftpointer = middlepointer + 1;
        }
    }

    return "Not Found"
}

console.log(binarySearchAlgorithm([2,4,5,13,25,37,56,88,97], 26)); //return Not Found if not found
console.log(binarySearchAlgorithm([2,4,5,13,25,37,56,88,97], 56)); //return 6 index

//Time complexity: Big-O = O(n)