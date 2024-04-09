//adding of the number input

function AddingNumber(num){
    let numtostring = Array.from(String(num))
    let total = 0

    for(const i of numtostring){
        total = total + (+i)
    }

    return total
}

// console.log(AddingNumber(23456));

//adding, deleting, updating and searching of the data in array

let array = [32, 43, 56, 88, 26, 83];

function AddingElement(newelement, position){
    for(let i = array.length - 1; i >= 0; i--){
        if(i >= position){
            array[i+1] = array[i]

            if(i === position){
                array[i] = newelement
            }
        }
    }

    return array
}

// console.log(AddingElement(77, 2));

//alternative splice method

array.splice(2, 0, 77);
console.log(array);
