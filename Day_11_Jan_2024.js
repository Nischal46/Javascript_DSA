//create a dummy array
//insertion of the datain the array
//deletion of the data in the array
//searching of the data in the array


const {log} = require('console');
const readlineSync = require('readline-sync');

const studentMarks = [
    {
        name: "ram",
        faculty: "science",
        division: "first division",
        district: "lalitpur"
    },

    {
        name: "laxman",
        facullty: "management",
        division: "distinction",
        district: "pokhara"
    },

    {
        name: "bharat",
        faculty: "science",
        division: "distinction",
        district: "kavre"
    },

    {
        name: "ravan",
        faculty: "arts",
        division: "second division",
        district: "kathmandu"
    }
];

log(`The initial array is ${studentMarks}`);

log(`
--> Press 1 to insert the data in array
--> Press 2 to delete the data in array
--> Press 3 to search the data in array
`)

const operation = +readlineSync.question("Enter the operation that need to perform: ");

switch(operation){
    case 1:
        const newStudentData = {name: "ganesh", faculty: "science", division: "distinction", district: "Bhaktapur"}
        const position = +readlineSync.question("Enter the position of the array to be insert: ")
        let i = studentMarks.length - 1;
        while(i>=0){
            if(i>=position){
                studentMarks[i + 1] = studentMarks[i]
                if(i === position){
                    studentMarks[i] = newStudentData
                }
            }
            i--;
        }

        log('The student array after the insertion of the new data is ', studentMarks);
        break;

    case 2:
        const deleteIndex = +readlineSync.question("Enter a position of the array where the data is to be deleted: ");
        for(let i = deleteIndex; i<=studentMarks.length - 1; i++){
            studentMarks[i] = studentMarks[i+1];

            studentMarks.length = studentMarks.length - 1;
        }
        console.log("The array after the deletion of the data of the specific index is ", studentMarks);
        break;

    case 3:
        const searchelement = readlineSync.question("Enter a name that need to be search: ");
        let result;
        for(let i = 0; i <= studentMarks.length-1; i++){
            if(studentMarks[i].name === searchelement){
                result = studentMarks[i];
                break;
            }
        }

        log('Search result, ', result);
        break;

    default:
        log("Invalid input. Please choose correct");
        break;

}

