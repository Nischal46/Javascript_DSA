// insertion, deletion, searching and updating of the array.

let numArray = [12, 43, 22, 67, 53, 37, 88];

for (let i = numArray.length - 1; i >= 0; i--){
    if(i >= 3){
        numArray[i+1] = numArray[i];
        
        if(i == 3){
            numArray[i] = 7;
        }
    }
}

console.log(numArray);

//arranging data in descending order by using bubble sort algorithm

for(let i = 0; i <= numArray.length - 1; i++){
    for(let j = 0; j <= numArray.length - 1; j++){
        if(numArray[j] < numArray[j + 1]){
            let temp = numArray[j];
            numArray[j] = numArray[j+1];
            numArray[j+1] = temp;
        }
    }
}

console.log(numArray);

let randomNum = [12, 34, 66, 21, 43, 66, 78, 88];

const numDivisible = randomNum.filter(function(cl){
    if(cl % 2 == 0) console.log(`${cl} divisible by 2`);
})

console.log(numDivisible);

//differentiate between flat and flatmap

let stname = ['ram', 'laxman', 'dipak', 'aman', 'roshan', ['samir', 'sabin', 'hari', ['omkar']]];

const stdetail = stname.flat(2).sort();
console.log(stdetail);


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