//array related questions

// 1. remove all even integers from an array

let num = [4, 1, 9, 10, 15, 22, 5, 14];
removearray = []
for(let i = 0; i < num.length; i++){
    if(num[i] % 2 == 0){
        removearray.push(num[i])
    }
}

console.log(removearray);



// 2. find all repeated numbers in the array

let input = [1,2,4,7,6,1,3,7,9,10]
let uniquearray = []
for(let i = 0; i<input.length; i++){
    if(!uniquearray.includes(input[i])) uniquearray.push(input[i])
}

console.log('The repeatance of the array is ', input);
console.log(`After removing the duplicate value in array `, uniquearray);

//3. string methods

const stringreesult = 'learning javascript concepts'
//checking the index and the last index of the string

console.log(stringreesult.indexOf('e'));
console.log(stringreesult.lastIndexOf('e'));

//cut or slicing the string
console.log(stringreesult.slice(0, 8));

//counting thee index is not ideal and good practice instead we can use this as

console.log(stringreesult.slice(0, stringreesult.indexOf(" ")));

//incase if we want to extract the last word of the string theen
console.log(stringreesult.slice(stringreesult.lastIndexOf(' ')));

//changing lowercase and uppercase
console.log(stringreesult.toUpperCase());

//capitalizing the first leetter of the string

const username = 'nischal'
const finalusername = username[0].toUpperCase() + username.slice(1);
console.log(finalusername);

//lowercase is mustly used for the email where user may type capital letter and trim is used for removing the white space

const email = '  Nischal@Gmail.com'
console.log(email);

const correctEmail = email.toLowerCase().trim()
console.log(correctEmail);

//replace method in string

const str = 'watsup! Buddy'
console.log(str.replace('watsup', 'Hello'));

const str2 = 'Ram is a good boy. Ram is very dedicated towards his work'
console.log(str2.replaceAll('Ram', "he"));

//join methid is used to convert array into string and split is opposite

const ConvertingIntoCorrectNameCase = (naminput) => {
    const name = naminput.split(" ");
    const newarraynamestore = []   
    for(const n of name){
        newarraynamestore.push(n[0].toUpperCase()+n.slice(1))
    }

    console.log(newarraynamestore.join(" "));
}

ConvertingIntoCorrectNameCase("nischal baniya")
ConvertingIntoCorrectNameCase("mr amar singh thapa")