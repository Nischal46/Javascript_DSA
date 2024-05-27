let array = [23, 54, 66, 76, 87, 89, 97];

let removingarray = array.splice(0, 2);

console.log(removingarray);

let num1 = [12, 23, 34, 45, 56, 34, 34, 76, 45];

function removeDuplicate(no){
    let removeDuplicateNumber = []
    for(const item of no){
        if(!removeDuplicateNumber.includes(item)){
            removeDuplicateNumber.push(item)
        }
    }

    return removeDuplicateNumber;
}

console.log(removeDuplicate(num1));