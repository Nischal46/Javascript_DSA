//Insertion of the object in existed array
const readlinesync = require('readline-sync');
let studentDetails = [
    {
        name: "Nischal",
        age: 24,
        nationality: "Nepali"
    },
    {
        name: "Bibek",
        age: 27,
        nationality: "Nepali"
    },
    {
        name: "Apsara",
        age: 25,
        nationality: "Nepali"
    }
]

console.log('The student details array is ', studentDetails);


const studentName = readlinesync.question("Enter student Name: ");
const studentAge= +(readlinesync.question("Enter student age: "));
const studentNationality = readlinesync.question("Enter student Nationality: ");

const position = +(readlinesync.question("Enter a position of array to insert student object data: "));

const choice = +(readlinesync.question("Enter a choice to perform whether by algorithm or Built in splice method. Press 1. Algorithm 2.Splice: "))


//inserting element using for loop]

const studentNewData = { name: studentName, age: studentAge, nationality: studentNationality}


switch(choice){
    case 1: 
        console.log('Perform using loop method');
        for(let i = studentDetails.length - 1; i >= 0; i--){
            // console.log(studentDetails[i]);
        
            if(i>=position) 
                studentDetails[i+1] = studentDetails[i];
        
                if(i==position)
                    studentDetails[i] = studentNewData
        }
        break;

    case 2:
        console.log('Perform using splice method');
        studentDetails.splice(position, 0, studentNewData);
        break;

    default: 
        console.log("Your choice is not valid. Please choose correct");

    
}



console.log(studentDetails);