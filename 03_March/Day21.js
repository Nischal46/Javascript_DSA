//account login system
const input = require('readline-sync');

async function loginsystem(){
    let lock = true;
let count = 1;
while(lock){
    

    if(count <= 3){
        const password = input.question("Enter a password: ");
        if(password === "admin"){
            console.log("password matched");
            break;
        }
        else{
            console.log("wrong password");
            count++;
        }
    }

    else{
        console.log('Lock for 5 sec');
        lock = false;
        await delay(5000);
        lock = true;
        count = 1;
    }
}


}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// loginsystem()

//bubble sort algorithm to sort the array

function BubbleSort(array){
    let swapped;
    do{
        swapped = false
        for(let i = 0; i <array.length; i++){
            if(array[i] > array[i+1]){
                let temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
                swapped = true;
            }
        }
    }
    while(swapped)
    return array
}

console.log(BubbleSort([-2, -6, 5, 3, 9, 8]));

// time complexity: O(n^2)

//print factorial number of n no