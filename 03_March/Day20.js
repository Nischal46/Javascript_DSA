//Question of logic buildings

//1. find the duplicate elements in array
function FindDuplicateElement(str){
    let duplicate = {};

    for(const char of str){
        if(char !== " "){
            if(duplicate[char]){
                duplicate[char]++; 
             }
             else{
                 duplicate[char] = 1;
             }
        }
    }

    console.log(duplicate);

    //now find the highest duplicate of the character in string
    // let highest_repeatance = 0;
    // for(const char in duplicate){
    //     console.log(duplicate[char]);
    //     highest_repeatance = Math.max(duplicate[char], Object.values(duplicate))
    // }

    let highest_repeatance = 0;
    let repeatance_character = ""
    for(const char in duplicate){
        const count = duplicate[char];
        if (count > highest_repeatance) {
            highest_repeatance = count;
            repeatance_character = char
        }
    }

    console.log('highest repeatance count is ', highest_repeatance);

    console.log('highest repeatance character is ', repeatance_character);
}

FindDuplicateElement('young and talented')