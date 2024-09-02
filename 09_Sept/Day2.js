// user authenbtication system

const input = require('readline-sync');

let userArray = [
    {id: 1, name: 'john'},
    {id: 2, name: 'shyam'}
];

function RegisterUser(name, email, password){
    console.log(`Welcome, ${name}. Your email address is ${email} and password is ${password}`);
}

function LoginUser(){
    console.log(`You hsve successfull login`);
    console.log(`User data are: ${userArray}`);
}

function LogoutUser(){
    console.log(`Successfully Logout`);
    
}

let bool = true;

while(bool){
    const inputChoice = +input.question('Enter a choice for operation: ');

    switch(inputChoice){
        case 1:
            const name = input.question("Enter name: ");
            const email = input.question("Enter email: ");
            const password = input.question("Enter password: ");
            RegisterUser(name, email, password);
            break;
        case 2:
            const loginemail = input.question("Enter email: ");
            const loginpassword = input.question("Enter password: ");
            LoginUser();
            break;
        case 3:
            LogoutUser();
            break;
        case 4:
            bool = false;
            break;
        default:
            console.log('Invalid choice');
            break;
    }
}