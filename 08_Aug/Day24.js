//array manipulation 

const { table } = require("console");

let arr = [1,2,3,4,5];
let newarr = [];

function sumWithPrevious(arr){

    for(let i = 0; i < arr.length; i++){
        if(i < 1){
            newarr.push(arr[i]);
        }

        else{
            console.log(arr[i], newarr[i-1]);
            
            let res = arr[i] + arr[i-1]
            newarr.push(res);
        }
    }    

}

sumWithPrevious(arr);

console.log('The immutable array concept');

table(arr);
table(newarr);

//remove duplicate from array

let dupArr = [1,2,3,2,4,5,6,3,4];
let uniqueArr = [];
function RemoveDuplicate(arr){
    for(const x of arr){
        if(!uniqueArr.includes(x)){
            uniqueArr.push(x)
        }
    }
}

RemoveDuplicate(dupArr)

console.log('Removing duplicate array');

console.log(dupArr, uniqueArr);


