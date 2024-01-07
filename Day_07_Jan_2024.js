// Program that operate defferent operations. 

const {log} = require('console');
const input = require('readline-sync');


const person = [
    {
        id: 1234,
        name: "Nischal Baniya",
        age: 23,
        education: "Bachelor",
        profession: "Software Developer"
    },

    {
        id: 1424,
        name: "Arijit Singh",
        age: 37,
        education: "Master",
        profession: "Software DeveloperS"
    },

    {
        id: 1543,
        name: "Paras Thakuri",
        age: 24,
        education: "Higher Education",
        profession: "Graphic Designer"
    },

    {
        id: 1342,
        name: "Suresh Bhattarai",
        age: 23,
        education: "Bachelor",
        profession: "Backend Developer"
    },

    {
        id: 1874,
        name: "Prabin Dahal",
        age: 25,
        education: "Bachelor",
        profession: "UI/UX developer"
    },

    {
        id: 1904,
        name: "Niraj Shrestha",
        age: 22,
        education: "Bachelor",
        profession: "Cyber Security"
    }
]

log("----------------Program Starts-----------------------");

log('The initial array of the person is ', person)

log(`
--> Press 1 to insert new student detail in the array
--> Press 2 to search the student detail
--> Press 3 to delete existing student detail from the array
--> Press 4 to sort the student details
`)

const userChoice = +input.question("Enter a choice to perform the operation: ");

switch(userChoice){
    case 1:
        const name = input.question("Enter the name: ");
        const age = +input.question("Enter age: ");
        const education = input.question("Enter degree: ");
        const profession = input.question("Enter profession: ");

        log(`
        Press 1 to add data and operate descending sorting
        Press 2 to add data and operate ascending sorting
        `);

        const sortingoption = +input.question('Enter choice of operation: ');

        switch(sortingoption){
            case 1:

                let i = person.length - 1;
                while(i >= 0){

                    person[i+1] = person[i];

                    if(i === 0){
                        person[i] = {id: +(1 + '' + Math.floor(Math.random() * 1000)), name, age, education, profession};
                    }

                    i--;
                }

                log(`The new person details array where data added in descending order `, person);


                break;

            case 2:

                person.splice(person.length, 0, {id: +(1 + '' + Math.floor(Math.random() * 1000)), name, age, education, profession})

                log(`The new person details array where data added in ascending order `, person);

                break;
        }
        break;

    case 2:
        log(`
        Search interms of
        --> Press 1 to search according to person name 
        --> Press 2 to search according to person age
        --> Press 3 to search according to person education degree
        `)
        let searchOutput = [];

        const searchChoice = +input.question("Enter choice of search: ");

        switch(searchChoice){
            case 1:
                const searchName =  input.question("Enter the field that need to be search: ");

                for(let i = 0; i<person.length; i++){
                    if(person[i].name === searchName){
                        searchOutput.push(person[i]);
                    }
                    
                }
        
                log(`The search data of the field ${searchName} in the list of array is `, searchOutput);
                break;

            case 2:
                const searchAge =  +input.question("Enter the field that need to be search: ");

                for(let i = 0; i<person.length; i++){
                    if(person[i].age === searchAge){
                        searchOutput.push(person[i]);
                    }
                    
                }
        
                log(`The search data of the field ${searchAge} in the list of array is `, searchOutput);
                break;

            case 3:
                const searchDegree =  input.question("Enter the field that need to be search: ");

                for(let i = 0; i<person.length; i++){
                    if(person[i].education === searchDegree){
                        searchOutput.push(person[i]);
                    }
                    
                }
        
                log(`The search data of the field ${searchDegree} in the list of array is `, searchOutput);
                break;

        }
       
        break;

    default:
        log('Invalid Input. Please give correct input');
        break;
}




