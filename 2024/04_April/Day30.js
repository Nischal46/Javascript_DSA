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


//using the flatmap concept

const data = [1,2, [5,6], [7,8, [12, 14]]]
console.log(data);
const singlearray = data.flat(2)
console.log(singlearray);
// using the flat method we can dive deeper

const flatmap = data.flatMap((pd) => pd);
console.log(flatmap);
//using the flatmap concept we can dive onto only 1 state.

const numarray = [1,2,3,4,5,6,7,8,9];

const num1 = numarray.reduce((acc, pd) => {
    if(pd > 5) return [...acc, pd]
    else return acc
}, [])

console.log(num1);

const studentarray = [
    {name: 'nischal', faculty: 'IT'},
    {name: 'parina', faculty: 'BBA'},
    {name: 'pradip', faculty: 'MBA'},
    {name: 'suresh', faculty: "IT"}
]

const it_array = studentarray.reduce(function(acc, cur){
    if(cur.faculty === "IT") return [...acc, cur];
    else return acc;
}, []);

console.log(it_array);
