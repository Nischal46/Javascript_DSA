//check whether the string is palindrome or not


function CheckPalindrome(arr){
    for(const item of arr){
        let no = item.length - 1;
        let newString = "";
        for(let i = no; i >= 0; i--){
            newString = newString + item[i];
        }

        if(newString === item) console.log(`${item} and ${newString} is a palindrome string`);
        else console.log(`${item} and ${newString} is not a palindrome string`);
    }
}

let strArray =['racecar', 'pop', 'loop', 'wow', 'pen'];

CheckPalindrome(strArray)