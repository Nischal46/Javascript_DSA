let string = 'reverse this string'

//1st approach
//new variable is assigned to keep the iteration
let array = []
for(let i = string.length; i >= 0; i--){
    array.push(string[i]);
}
array = array.join("")
console.log(array);


//2nd approach
console.log([...string].reverse().join(''));

//capitalizing the first letter in case the user pass the name input letter all in small

let userinput = 'ramesh' // to send the name before the submitting we can change
let correctNameCase = userinput[0].toUpperCase() + userinput.slice(1)

console.log(correctNameCase);

//padstart and padend are also the useful method when we want to expose little credentials and expose other 
//such as the bank account umber and the user username in some case

let accountNumber = '5465765768756566';
let encodedNum = accountNumber.slice(-4).padStart(accountNumber.length, '*');
console.log(encodedNum);