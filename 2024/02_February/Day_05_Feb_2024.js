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