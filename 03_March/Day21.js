//account login system
const input = require('readline-sync');

async function loginsystem(){
    let lock = true;
let count = 1;
while(lock){
    

    if(count <= 3){
        const password = input.question("Enter a password: ");
        if(password === "admin"){
            console.log("password matched");
            break;
        }
        else{
            console.log("wrong password");
            count++;
        }
    }

    else{
        console.log('Lock for 5 sec');
        lock = false;
        await delay(5000);
        lock = true;
        count = 1;
    }
}


}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

loginsystem()