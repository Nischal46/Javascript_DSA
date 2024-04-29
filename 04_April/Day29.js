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

// CheckPalindrome(strArray)

//Promise resolve and reject

//using promise check the user input email address is authentic or not

function ValidateEmailAddress(input){
    return new Promise((resolve, reject) => {
        if(input.includes("@") && input.includes(".")) resolve('verified');
        else reject('unverified')
    })
}

ValidateEmailAddress('baniyanisal12@gmail.com')
.then((res) => {
    console.log("Email Address verified successfully");
}).catch((err) => console.log('Email Address verified failed')
)
