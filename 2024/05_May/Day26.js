//practice builtin array method in js

const array1 = ['php', 'node', 'java', 'javascript', 'python'];

const array2 = ['php', 'node', 'java', 'javascript', 'python'];

const checkarray = array1.every(cl => array2.some(nl => cl.includes(nl)));

console.log(checkarray);




// indexof
const name = ['ramesh', 'ravi', 'lal bahadur'];
console.log(name.indexOf('ravi'))


//string useful method

const firstname = "nischal";
const lastname = "baniya";

const fullname = firstname + lastname;
console.log(fullname);
const concat = firstname.concat(" ", lastname);
console.log(concat);

console.log(fullname.indexOf('s'));

//object method

const studentdetails = {
    physics: 77,
    chemistry: 67,
    math: 89,
    biology: 67
}

// const convertObjectToArray = Object.entries(studentdetails); this return value with subject
// const convertObjectToArray = Object.values(studentdetails); this return the second value

const convertObjectToArray = Object.keys(studentdetails); // this return only subject of the object


console.log(convertObjectToArray);

class Student{
    constructor(name, email, faculty){
        this.name = name;
        this.email = email;
        this.faculty = faculty
    }

    details(){
        console.log(`Your name ${this.name}. Email Address ${this.email} and faculty ${this.faculty}`);
    }
}

const stobject = new Student('Nischal', 'baniyanisal12@gmail.com', 'IT');

console.log(stobject);

stobject.details();

// queue function

let queue = [];

let maxsize = 4;

let queuesize = queue.length;

function enqueue(val){
    if(queuesize <= maxsize){
        queue[queuesize] = val;
        queuesize++;
    }

    else{
        console.log('queue is fulfilled already');
    }
}

function displayqueue(){
    console.log('the current queue is ', queue);
}

function dequeue(){
    if(queuesize > 0){
        for(let i=0; i < queue.length; i++){
            queue[i] = queue[i+1];
        }
        queuesize--;
        queue.length = queuesize;
    }
    else{
        log('queue is empty');
    }
}

enqueue(5);
enqueue(1);
displayqueue();

console.log('Deleting data in queue');
dequeue();
displayqueue()