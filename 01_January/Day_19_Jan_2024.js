//make the student details array
//again add the student details
//delete the student details
//search the student details
//sorting of the student details

//note: the program should quit after user choice
const input = require('readline-sync');
const {log} = require('console');

let gameStart = true;
let studentArray = [];

while(gameStart){
    log(`
    --> Press 1 to check the array status
    --> Press 2 to add the student details in the array
    --> Press 3 to delete the student details in the array
    --> Press 4 to search the student details in the array
    --> Press 5 to sort the student details in the array
    --> Press 6 to quit the program
    `)
    const userChoice = +input.question('Enter choice: ');

    switch(userChoice){
        case 1:
            log('This status of the student array');
            log('The length of the student array is ', studentArray.length - 1);
            log(studentArray);
            break;

        case 2:
            log('Insertion of the student array');
            const noOfturn = +input.question('Enter a no of the student details to add');

            function addstudentDetails(){
                const name = input.question("Enter student Name: ");
                const age = +input.question("Enter student Age");
                const email = input.question("Enter student email address");

                return {name, age, email};
            }

            for(let i = 0; i < noOfturn; i++){
                if(studentArray.length < 1){
                    const details = addstudentDetails();
                    studentArray.push(details);
                }
                else{
                    const details = addstudentDetails();
                    studentArray.push(details);
                }
                
            }
            log('The insertion of the student details ', studentArray);
            break;

        case 3:
            log('This is the switch case of the deletion of the array');
            break;

        case 4:
            log('This is the switch case of the search of the array');
            break;

        case 5:
            log('This is the witch case of the sorting of the array');
            break;

        case 6:
            log('This is the switch case of the quit of the program');
            break;

        default:
            log('Invalid input. Please choose correct input');
            break;
    }
}