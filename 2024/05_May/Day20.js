let laptopdetails = [
    ['dell', 'acer', 'hp'],
    ['lenovo', 'asus'],
    ['macbook']
];

console.log('initial array', laptopdetails);

const mergingarray = laptopdetails.reduce((acc, arr) => acc.concat(arr), []);
console.log('after merging', mergingarray);

let anotherarray = {
    class11books: ['computer', 'physics', 'chemistry'],
    class12books: ['programming', 'math']
}
console.log('object of books', anotherarray);
const objectmergeintoarray = Object.values(anotherarray).reduce((acc, arr) => acc.concat(arr), []);
console.log('final array from object', objectmergeintoarray);

//constructor function

function Person(name, email){
    this.name = name;
    this.email = email;

    this.greeting = function(){
        console.log(`Hey ${this.name} Congratulations. Your email address is ${this.email}`);
    
    }
}

const person1 = new Person('Nischal', 'nisal12@gmail.com');
person1.greeting();

//factory function

function factoryFunction(name, stack){
    return {
        name,
        stack,

        description(){
            console.log(`Hello I am ${name} and I am ${stack} developer`)
        }
    }
}

const dev = factoryFunction('Nischal', 'fullstack');
dev.description();

//solving queue by switch function

const {log} = require('console');
const input = require('readline-sync');

let queue = [34,54];

let maxsize = 5;

let queueSize = queue.length;

const operation = +input.question("Enter a operation that needs to perform: ");

switch(operation){
    case 1:
        log("Adding Data in queue");
        for(let i=0; i<maxsize; i++){
            const val = +input.question("Enter the data that need to added in queue: ")
            if(queueSize < maxsize){
                queue[i] = val;
                queueSize++;
            }
            else{
                log('Queue already full')
            }
        }
        log('Adding data in queue ', queue);
        break;

    case 2:
        log("Deleting Data in queue");
        if(queueSize > 0){
            for(let i=0; i<queue.length; i++){
                queue[i] = queue[i+1];
            }
            queueSize--;
            queue.length = queueSize;
            log('Deleting data in queue ', queue)
        }
        else{
            log('Queue is empty.')
        }

    default:
        log('Invalid operation');
        break;
}



