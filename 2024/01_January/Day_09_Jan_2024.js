let arrayNumber = [2,4,1,5,9,6];
console.log('The initial array is ', arrayNumber);

const flatarraymap = arrayNumber.flatMap(x => x*3);

console.log('Flat map array of the initial array multiply by 3 is , ', flatarraymap);

const sorting = arrayNumber.sort();

console.log('The flat map array after sorting in ascending order is ', sorting);

const number = 'loop concept';
const reversenumber = number.split('').reverse().join('');

console.log(reversenumber);

// for(let i = 0; i<number.length; i++){
//     const spe = number.charAt(i);
//     console.log(spe);
// }


//using for loop concept

function reversreString(inputName){
    let reverseName = '';

    for(let i = inputName.length - 1; i>=0; i--){
        reverseName += inputName[i]
    }

    return reverseName;
}

const personName = 'Samantha Prabhu';
const reversreStringOutput = reversreString(personName);
console.log(reversreStringOutput);

