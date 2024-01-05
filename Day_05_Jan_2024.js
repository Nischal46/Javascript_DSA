//Day 5 Programming
const array = [32, 54,65,34,22];
console.log('The initial array, ', array);
console.log("-------------------------Program--------------------");

console.log(`
Press
1. Insertion of the element of the array
2. Deletion of the element of the array
3. Searching of the index of the array
4. Merging of multiple array
`);  

const readlinesync = require('readline-sync'); 
const userinput = +readlinesync.question('Enter a choice for the operation: ');


switch(userinput){
    case 1:
        console.log('You had choosen for the operation of adding element in the array: ');
        const addedElement = +readlinesync.question('Enter the element: ');


        const index = +readlinesync.question('enter a position to insert the element: ');


        for(let i = array.length - 1; i>=0; i--){
            if(i>=index){
                array[i] = array[i+1];

                if(i === index){
                    array[i] = addedElement;
                }
            }
        }

        console.log('The array after the insertion of the element, ', array);

        break;


    case 2:
        console.log('You had choosen for the operation of the deletion element in the array: ');
        const deleteelementIndex = +readlinesync.question("Enter the index of the elemen that need to be delete: ");

        for(let i = deleteelementIndex; i<=array.length - 1; i++){
            array[i] = array[i + 1];
        }

        array.length = array.length - 1;
        console.log(array);

        break;     


    case 3:
        console.log("You have choosen for the operation of the searching element index in the array");
        let findIndex;
        const searchelement = +readlinesync.question("Enter a element that need to be search of its index: ");

        for(let i=0; i<=array.length - 1; i++){
            if(array[i] === searchelement){
                findIndex = i
                break;
            }
        }
        console.log(`The element that you have entered is ${searchelement} and the element found at the index of ${findIndex}`);

        break;


    case 4:
        console.log("You have choosen for the operation of the merging of the multiple array");

        const arrayOne = [];

        const arrayTwo = [];

        let arraythree = [];

        for(let i = 0; i<= 2; i++ ){
            const inputarray1 = +readlinesync.question("Enter element in array one: ")
            arrayOne.push(inputarray1)
        }

        for(let i = 0; i<= 2; i++ ){
            const inputarray2 = +readlinesync.question("Enter element in array two: ")
            arrayTwo.push(inputarray2);
        }

        
        console.log(arrayOne, arrayTwo);
        arraythree = [...arrayOne, ...arrayTwo]

}