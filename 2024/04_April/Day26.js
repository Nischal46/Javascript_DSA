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

//constructor function and its prototype

function Details(name, address, contact, email){
    this.name = name;
    this.address = address;
    this.contact = contact;
    this.email = email;
}

Object.prototype.flashdetails = function(){
    console.log(`
    WELCOME
    Name: ${this.name}
    Address: ${this.address}
    Contact: ${this.contact}
    Email: ${this.email}
    `);
}

