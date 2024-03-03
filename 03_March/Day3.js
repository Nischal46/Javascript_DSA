// searching algorithm
//linear search // find the specific number from an array if the number is present then return index or if not then return -1

let arr = [-5, 6, 10, 4, 6];

let elementToFind = 6

for(let i = 0; i < arr.length; i++){
    if(arr[i] === elementToFind){
        console.log(i);
        //break; //this incase if we donot want to traverse whole array and break after we found our target
    }
}

//this search algorithm traverse whole array upto its size in the case of same multiple value to be found.

//another use ase of student details in array
let studentdetails = [
    {name: 'ramesh', faculty: 'IT'}, {name: 'suresh', faculty: 'IT'}, {name: 'pramesh', faculty: 'BBA'}
]

for(let i = 0; i < studentdetails.length; i++){
    if(studentdetails[i].faculty === "BBA"){
        console.log(i);
    }
}
// the time complexity is as the input increses the loop execution also increases
// Big-O = O(n)
