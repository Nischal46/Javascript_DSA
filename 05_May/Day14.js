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
            const noOfturn = +input.question('Enter a no of the student details to add: ');

            function addstudentDetails(){
                const id = Math.floor(Math.random() * 100)
                const name = input.question("Enter student Name: ");
                const age = +input.question("Enter student Age: ");
                const email = input.question("Enter student email address: ");

                return {id, name, age, email};
            }

            // for(let i = 0; i < noOfturn; i++){
            //     if(studentArray.length < 1){
            //         const details = addstudentDetails();
            //         studentArray.push(details);
            //     }
            //     else{
            //         const details = addstudentDetails();
            //         studentArray.push(details);
            //     }
                
            // }

            let i = 0;
            while(i<noOfturn){
                if(studentArray.length < 1){
                    const details = addstudentDetails();
                    studentArray.push(details);
                }
                else{
                    const details = addstudentDetails();
                    studentArray.push(details);
                }
                i++;
            }
            log('The insertion of the student details ', studentArray);
            break;

        case 3:
            log('Deletion of the student array');
            if(studentArray.length < 1){
                log('Student array is empty');
            }
            else{
                const position = +input.question('Enter a index of the student array to delete: ')
                for(let i = position; i < studentArray.length; i++){
                    studentArray[i] = studentArray[i+1];

                    studentArray.length = studentArray.length - 1;
                }
            }
            log('The deletion of the array ', studentArray)
            break;

        case 4:
            log('Searching of the student details in array');
            const searchID = +input.question("Enter id of the student to see details: ");
            const studentDetialsSearch = [];
            for(let i = 0; i < studentArray.length; i++){
                if(studentArray[i].id === searchID){
                    studentDetialsSearch[i] = studentArray[i];
                }
            }
            log('The search of the details of the student ', studentDetialsSearch)
            break;

        case 5:
            log('Sorting of the element');
            log(`
            --> Press 1 to sort data in ascending order
            --> Press 2 to sort data in descending order
            `)
            const sortChoice = +input.question('Enter a choice to sort data: ');
            switch(sortChoice){
                case 1:
                    log('Sorting data in ascending order');
                    for(let i = 0; i < studentArray.length; i++){
                        for(let j = 0; j < studentArray.length; j++){
                            if(studentArray[j].name > studentArray[j + 1].name){
                                let temp = studentArray[j];
                                studentArray[j] = studentArray[j + 1];
                                studentArray[j + 1] = temp;
                            }
                        }
                    }

                    log('Sorting result ', studentArray);
                    break;

                case 2:
                    log('Sorting data in descending order');
                    for(let i = 0; i < studentArray.length; i++){
                        for(let j= 0; j < studentArray.length; j++){
                            if(studentArray[j].name < studentArray[j + 1].name){
                                let temp = studentArray[j];
                                studentArray[j] = studentArray[j + 1];
                                studentArray[j + 1] = temp;
                            }
                        }

                        log('Sorting result: ', studentArray);
                        break;
                    }

                default:
                    log('Invalid input. Please choose 1 or 2 to sort data');
                    break;
            }
            break;

        case 6:
            log('This is the switch case of the quit of the program');
            gameStart = false;
            break;

        default:
            log('Invalid input. Please choose correct input');
            break;
    }
}