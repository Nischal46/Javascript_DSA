let array = [5, 10, 15, 20, 25, 30, 35, 40];

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

linearSearchAlgorithm(array, 75);