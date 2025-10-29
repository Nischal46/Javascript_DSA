//Learning DSA Day 14

//adding student data in existed array
//deleting the student data from the array
//search the student data feom the array
//sort the student data from the array

const input = require('readline-sync');
const {log} = require('console');

const array = [
    {
        name: 'Shailesh',
        percentage: 80,
        division: 'distinction'
    },

    {
        name: 'Pratik',
        percentage: 78,
        division: 'first'
    },

    {
        name: 'Nima',
        percentage: 66,
        division: 'first'
    },

    {
        name: 'Rupa',
        percentage: 59,
        division: 'second'
    }
]

log('The initial array of the student is ', array);

const operation = +input.question('Enter the choice of the operation: ');

switch(operation){
    case 1:
        let i = array.length - 1;
        const newdata = {name: 'Hari prased', percentage: 92, division: 'distinction'};
        while(i>=0){

            if(i>=0){
                array[i+1] = array[i];
                if(i===0){
                    array[i] = newdata
                }
            }

            i--;
        }
        log('The array of the student after inserting data is ', array);
        break;

    case 2:
        let deleteIndex = +input.question("Enter a position of the array that need to be deleted: ");

        let j = deleteIndex;

        while(j<array.length){
            array[j+1] = array[j];

            array.length = array.length - 1;
            j++;
        }

        log('The array of the student after the deletion of the details ', array);
        break;

    case 3:
        let searchIndex = input.question('Enter a division that the students got: ');
        let searchResult = [];
        let k = 0;
        while(k<array.length){
            if(array[k].division === searchIndex){
                searchResult = array[k];
            }

            k++;
        }
        log('The array after the searching feature by using the while loop, ', array);
        break;

    case 4:
        log(`
        --> Press 1 to sort student array data in ascending order
        --> Press 2 to sort student array data in descending order
        `)
        const sortOption = +input.question('Enter a option to sort student array data. ')
        
        switch(sortOption){
            case 1:
                for(let x = 0; x < array.length - 1; x++){
                    for(let y = 0; y < array.length - 1; y++){
                        if(array[y].percentage > array[y+1].percentage){
                            let temp = array[y];
                            array[y] = array[y+1];
                            array[y+1] = temp;
                        }
                    }
                }
                console.log("The student array after sorting, ", array);
                break;

            case 2:
                for(let x = 0; x < array.length - 1; x++){
                    for(let y = 0; y < array.length - 1; y++){
                        if(array[y]<array[y+1]){
                            let temp = array[y];
                            array[y] = array[y+1];
                            array[y+1] = temp;
                        }
                    }
                }
                log('The array after sorting in descending order, ', array);
                break;

            default:
                log('Invalid input. Please input correct');
                break;
                

        

        }
        

        

    

    default:
        log('Invalid input. Please give correct input');
        break;

}


