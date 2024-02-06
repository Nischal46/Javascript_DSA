//implementing queue

let queue = [];

let maxsize = 3;
let queuesize = queue.length;

function enqueue(val){
    if(queuesize <= maxsize){
        queue[queuesize] = val;
        queuesize++;
    }
    else{
        console.log('queue is already fulfilled');
    }
}

function displayqueue(){
    console.log('the current queue is ', queue);
}

enqueue(7);
enqueue(10);
enqueue(5);
enqueue(1);
enqueue(89);
displayqueue();