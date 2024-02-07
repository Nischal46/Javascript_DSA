//solving queue by switch function

const {log} = require('console');
const input = require('readline-sync');

let queue = [];

let maxsize = 5;

let queueSize = queue.length;

const operation = +input.question("Enter a operation that needs to perform: ");

switch(operation){
    case 1:
        log("Adding Data in queue");
        const val = +input.question("Enter the data that need to added in queue: ")
        if(queueSize < maxsize){
            queue[queueSize] = val;
            queueSize++;
        }
        else{
            log('Queue already full')
        }
        log('Adding data in queue ', queue);
        break;

    default:
        log('Invalid operation');
        break;
}



