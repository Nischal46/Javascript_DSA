//program to write the logic in context of array 
//addition of the data
//deletion of the data
//searching of the data
//sorting of the data
const {log, table} = require('console');
const input = require('readline-sync');

let array = ['Reactjs', 'Angular', 'Vue', 'Remix'];
table(array);

log(`
--> Press 1 to enter new data in array
--> Press 2 to delete data from array
--> Press 3 to search data from array
--> Press 4 to sort array data
`)

const operation = +input.question('Enter operation to perform')

switch(operation){
    case 1:
        log('Addition operation');
        for(let i = array.length - 1; i >= 0; i--){
            array[i] = array[i]
            if(i >= 0){
                array[i+1] = array[i]
                if(i === 0){
                    array[i] = "Nextjs"
                }
            }
        }
        table(array);
        break;
}