// binary search algorithm to find specific number
//for the operation that need to be search the array should be sorted 

const array = [12, 43, 65, 73, 85];

const searchEelement = 73;

function Binary_Search_Fn(array, searchEelement){

    let left = 0;
    let right = array.length - 1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(array[mid] === searchEelement){
            return mid;
        }

        if(searchEelement < array[mid]){
            right = mid -1;
        }

        else {
            left = mid + 1;
        }

    }

    return -1;
   
}

const result = Binary_Search_Fn(array, searchEelement);

if (result !== -1) {
    console.log(`The target ${searchEelement} is found at index ${result}`);
} else {
    console.log(`The target ${searchEelement} is not found in the array`);
}