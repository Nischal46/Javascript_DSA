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

let employesalary = [
    {name: 'ram', salary: 25000}, {name: 'hari', salary: 20000}, {name: 'shyam', salary: 30000}, {name: 'prabin', salary: 35000}
]

for(let i = 0; i < employesalary.length - 1; i++){
    for(let j = 0; j < employesalary.length - 1; j++){
        if(employesalary[j].salary > employesalary[j+1].salary){
            let temp = employesalary[j];
            employesalary[j] = employesalary[j+1];
            employesalary[j+1] = temp
        }
    }
}

// time complexity: O(n^2) if we use loop for n no of times two times then it becomes quardatic
console.log('Arranging employee details according to salary ascending order, ', employesalary);

//same case for the descending order same time complexity

// linear search works for unsorted array also but binary search doesnot work in unsorted array. it should be in sorted

//queestion related to binary search

function binarySearch(arr, target){
    let leftpointer = 0;
    let rightpointer = arr.length - 1;

    while(leftpointer <= rightpointer){
        let middlepointer = Math.floor((leftpointer + rightpointer) / 2);

        if(target === arr[middlepointer]){
            return middlepointer;
        }

        if(target < arr[middlepointer]){
            rightpointer = middlepointer - 1;
        }
        else{
            leftpointer = middlepointer + 1
        }
    }
}

let numarray = [-4, -2, 3, 5, 8, 9, 10, 15]

console.log(binarySearch(numarray, 8));

