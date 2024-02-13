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