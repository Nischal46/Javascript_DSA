let studentDetail1 = [
    {
        name: 'bikash',
        age: 27
    },

    {
        name: 'tirkal',
        age: 24
    },
    
    {
        name: 'samarpan',
        age: 25
    }
];

//sorting of the array

for(let i = 0; i <= studentDetail1.length - 1; i++){
    for(let j = 0; j <= studentDetail1.length - 1; j++){
        if(studentDetail1[j].age > studentDetail1[j+1].age){
            let temp = studentDetail1[j];
            studentDetail1[j] = studentDetail1[j + 1];
            studentDetail1[j + 1] = temp
        }
    }
}

console.log('The array data after sorting ', studentDetail1);