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

        function Searchcategories(field, searchinput){
            log(field, searchinput);
            for(let i = 0; i<person.length; i++){
                if(field === "age"){
                    const fieldValue = person[i].age;

                    if(fieldValue === searchinput){
                        searchOutput.push(person[i]);
                    }
                }
               else{
                const fieldValue = person[i][field].toLowerCase();
                if(fieldValue.includes(searchinput)){
                    searchOutput.push(person[i]);
                }
               }
                
            }
    
            log(`The search data of the field ${searchinput} in the list of array is `, searchOutput);
        }

        switch(searchChoice){
            case 1:
                const searchName =  input.question("Enter the name that need to be search: ");

                Searchcategories("name", searchName.toLowerCase())
                break;

            case 2:
                const searchAge =  +input.question("Enter the age that need to be search: ");

                Searchcategories("age", searchAge)
                break;

            case 3:
                const searchDegree =  input.question("Enter the education degree that need to be search: ");

                Searchcategories("education", searchDegree.toLowerCase());
                break;

            case 4:
                const searchProfession = input.question("Enter the profession that need to be searched: ");

                Searchcategories("profession", searchProfession.toLowerCase());

                break;

            default:
                log("Invalid input search");
                break;

        }
       
        break;

    case 3:
        const deleteId = +input.question("Enter the id to delete the data: ");

        for(let i = 0; i < person.length; i++){
            if(person[i].id === deleteId){
                person.splice(i, 1);
            }
        }

        log(`The array after the deletion of ${deleteId} is `, person);
        break;

    case 4:
        log(`
        *************Sorting****************
        Press 1 to sort data in ascending oder
        Press 2 to sort data in descending order
        `)
        const sortingChoice = +input.question("Enter a choice of sorting of the array: ")

        switch(sortingChoice){
            case 1:
                for (let i=0; i<person.length - 1; i++){
                    for (let j=0; j<person.length - 1; j++){
                        if(person[j].age>person[j+1].age){
                            let temp = person[j];
                            person[j] = person[j + 1];
                            person[j + 1] = temp;
                        }
                    }
                }

                log("Array sorting in ascending order: ", person)
                break;

            case 2:
                for (let i = 0; i<person.length - 1; i++){
                    for(let j = 0; j<person.length - 1; j++){
                        if(person[j].age<person[j+1].age){
                            let temp = person[j];
                            person[j] = person[j +1];
                            person[j + 1] = temp;
                        }
                    }
            
                }

                log("Array sorting in descending order: ", person)
                break;

            default:
                log("Invalid sorting option input");
                break;
        }
        break;

    default:
        log('Invalid Input. Please give correct input');
        break;
}




