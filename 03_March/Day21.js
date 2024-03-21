//automatically run the function using settimeout
const input = require('readline-sync')
const timeout = 5000;



const OS_Password = input.question("Enter password: ");

for(let i = 0; i < 3; i++){
    setTimeout(() => {
        console.log('time out function execute')
    }, timeout);
}