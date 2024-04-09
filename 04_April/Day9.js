//adding of the number input

function AddingNumber(num){
    let numtostring = Array.from(String(num))
    let total = 0

    for(const i of numtostring){
        total = total + (+i)
    }

    return total
}

console.log(AddingNumber(23456));
