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

console.log('Adding data in queue')
enqueue(7);
enqueue(10);
enqueue(5);
enqueue(1);
enqueue(89);
displayqueue();

console.log('Deleting data in queue');
dequeue();
displayqueue()
