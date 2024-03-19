
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