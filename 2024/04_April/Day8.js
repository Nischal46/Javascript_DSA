// write a function that takes an array as integer as input and remove the duplicate and return unique array

function RemoveElements(arr){
    let newarray = []
    for(const i of arr){
        if(!newarray.includes(i)){
            newarray.push(i)
        }
        else{
            console.log('already');
        }
    }

    return newarray
}

console.log(RemoveElements([1,2,3,4,5,2,3,6,7]))

// alternative method

const newelemnet = [12,34,65,12,34,67,43,21];

const removing_duplicate_element = (arr) => {
    let newarr = [...new Set(arr)]

    return newarr
}

// console.log(removing_duplicate_element(newelemnet));

// write a function that count the vowels from the string and returns the count to the user asd output

//option no 1
function Counting_Vowels(str){
    let count = 0;
    for(const i of str){
        if(i === 'a' || i === 'e' || i === 'o' || i === 'i' || i === 'u'){
            count++;
        }
    }
    return `There are ${count} vowels in ${str}`
}

console.log(Counting_Vowels('an umbrella'));

//option no 2

let vowels = ['a', 'e', 'i', 'o', 'u']

function Check_Vowels(str){
    let count = 0;
    for(const i of str){
        if(vowels.includes(i.toLowerCase())){
            count++;
        }
    }

    return `There are ${count} vowels in ${str}`
}
console.log(Check_Vowels('lAptop'));
