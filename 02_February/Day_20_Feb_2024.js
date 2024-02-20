// binary search algorithm to find specific number
//for the operation that need to be search the array should be sorted 

const array = [12, 43, 65, 73, 85];

const searchEelement = 73;

function Binary_Search_Fn(array, searchEelement){

    let left = 0;
    let right = array.length - 1;
    
    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(array[mid] === searchEelement){
            return mid;
        }

        if(searchEelement < array[mid]){
            right = mid -1;
        }

        else {
            left = mid + 1;
        }

    }

    return -1;
   
}

const result = Binary_Search_Fn(array, searchEelement);

if (result !== -1) {
    console.log(`The target ${searchEelement} is found at index ${result}`);
} else {
    console.log(`The target ${searchEelement} is not found in the array`);
}

//fn to arrange the list of array in ascending order

let studentDetails = [
    {
        id: 12,
        name: 'harish',
        age: 27
    },

    {
        id: 34,
        name: 'aman',
        age: 25
    },

    {
        id: 22,
        name: 'bimal',
        age: 32
    }
]

function Ascending_Age(){
    for(let i=0; i<studentDetails.length; i++){
        for(let j=0; j<studentDetails.length-1; j++){
            if(studentDetails[j].age > studentDetails[j+1].age){
                let temp = studentDetails[j];
                studentDetails[j] = studentDetails[j+1];
                studentDetails[j+1] = temp
            }
        }
    }
    console.log(`Arranging student details ascending order according to age `);
    console.log(studentDetails);
}

function Ascending_Name(){
    let i = 0;
    while(i < studentDetails.length){
        let j = 0;
        while(j < studentDetails.length - 1){
            if(studentDetails[j].name > studentDetails[j+1].name){
                let temp = studentDetails[j];
                studentDetails[j] = studentDetails[j+1];
                studentDetails[j+1] = temp
            }
            j++;
        }
        i++;
    }
    console.log(`Arranging student details ascending order according to name `);
    console.log(studentDetails);

}

// Ascending_Age()
// Ascending_Name()

function Descending_Age() {
    studentDetails = studentDetails.sort((a, b) => b.age - a.age);
    console.log(studentDetails);
}

// Descending_Age()

function Descending_Name(){
    studentDetails = studentDetails.sort((a, b) => b.name.localeCompare(a.name));
    console.log('Arranging the student details in descending order according to name');
    console.log(studentDetails)
}

Descending_Name()