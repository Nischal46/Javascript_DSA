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

// FindDuplicateElement('young and talented')



//find the vowels in string and its repeatance times

function CheckVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    let vowel_check_statistics = {}

    for(const char of str){
     if(char !== " "){
        if(vowels.includes(char)){
            console.log(char, 'is a vowel character');
            if(vowel_check_statistics[char]){
                vowel_check_statistics[char]++;
            }
            else{
                vowel_check_statistics[char] = 1
            }
            
        }
        else{
            console.log(char, 'is not a vowel character');
            // if(vowel_check_statistics[char]){
            //     vowel_check_statistics[char]++;
            // }
            // else{
            //     vowel_check_statistics[char] = 1
            // }
        }
     }
    }
    console.log(vowel_check_statistics);
   
}

CheckVowels('guitar and ukulele')
