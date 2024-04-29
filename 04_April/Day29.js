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


//an array of number is passed and the function should calculate only the positive numbers and display result to the users.

function AddSumNumber(arr){

    let total = 0;

    for(const item of arr){

        if(item % 2 == 0){
            total = total + item
        }

    }

    console.log(`The total of the sum number is ${total}`);
}

let no = [2, 3, 4, 5, 6, 7, 8, 9]

AddSumNumber(no)