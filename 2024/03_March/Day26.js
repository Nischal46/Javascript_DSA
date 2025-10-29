//reverse a string using logic and buitin method

let st_name = 'nischal baniya'
let reverse_string = ""

for(let i = st_name.length - 1; i >= 0; i--){
    reverse_string += st_name[i]
}
console.log(reverse_string);

//simple project of the game to guess the word

let random_word = ['loop', 'water', 'mouse', 'pen', 'laptop', 'copy', 'guitar', 'keyboard'];


function jumbleString(str) {
    // Convert string to array of characters
    var charArray = str.split('');

    // Fisher-Yates (aka Knuth) Shuffle algorithm
    for (var i = charArray.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = charArray[i];
        charArray[i] = charArray[j];
        charArray[j] = temp;
    }

    // Convert array back to string
    return charArray.join('');
}

// Example usage
var originalString = "serial";
var jumbledString = jumbleString(originalString);
console.log(jumbledString); // Output will be a jumbled version of the original string

//printing star using function

for(let i = 1; i <= 5; i++){
    let line = ""
    for(let j = i; j <=5; j++){
        line += "*"
    }
    // console.log("\n");
    console.log(line);
}

line = ""
for(let i = 1; i <= 5; i++){
    line += "*"
    console.log(line);
}

const input = require('readline-sync');

let start = true
while(start){
    const name = input.question("enter role: ");

    let timeRecorder = setTimeout(() => console.log('count'), 5000)
}


