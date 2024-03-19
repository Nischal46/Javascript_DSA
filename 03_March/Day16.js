
//high order map concept

const map = new Map();
map.set('IT', "Nischal");
map.set('BBA', 'Bibek');
map.set('BHM', "Sudip");
//this key of IT is not set because map only support unique key
map.set('IT', "Ramesh");

console.log(map);

//we can seperate each char in string


//removing white space in the string
const strings = "Coding day by day";
let newstring = "";
for(const char of strings){
    if(char === " ") continue
    else newstring = newstring + char;
}
console.log('Original string with spaces ', strings);
console.log('After removing spaces ', newstring);

//count the whitespace and letter in strings

const sentence = "Guitar is the instrument which i liked the most";
let count = 0;
let totalcharacter = 0
for(const char of sentence){
    if(char === " "){
        count = count + 1
    }
    else{
        totalcharacter = totalcharacter + 1;
    }
}
console.log('The total whitespace in the string is ', count);
console.log('The total character in the string is ', totalcharacter); 

//difference between the for of loop and for in loop is that for of loop access the direct value
//and for in access the key

let stringnew = "hello programmers";

for(const i in stringnew){
    console.log(i, stringnew[i])
}