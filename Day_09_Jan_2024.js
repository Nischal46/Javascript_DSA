let array = ['nischal', 'bibek', 'asmita', 'parina', 'roshni'];


//arranging array in ascending order
for(let i = 0; i<= array.length - 1; i++){
    for (let j = 0; j<=array.length - 1; j++){
        if(array[j]> array[j+1]){
            let temp = array[j];
            array[j] = array[j+1];
            array[j+1] = temp;
        }
    }
}

console.log(array);

//using sort built in method

let studentName = ['sabin', 'aman', 'hari', 'david', 'loken', 'guruman'];

studentName.sort();

console.log(studentName);

let employee = [
    {
        name: 'kushal',
        profession: 'Graphic designer'
    },
    {
        name: 'amar',
        profession: 'Frontend developer'
    },
    {
        name: 'babin',
        profession: 'Backend developer'
    }
];

employee.sort((a,b) => a.name.localeCompare(b.name));
console.log(employee);