//merging of the two array
//using js buitin method
//using loop logic

let array1 = ['ramesh', 'hari', 'avish', 'suresh', 'laxman'];

let array2 = ['smrika', 'abibsha', 'bini', 'radhika'];

let array3 = [];

for(let i = 0; i <= array1.length - 1; i++){
    array3[i] = array1[i];
}

for(let j = 0; j<=array2.length - 1; j++){
    array3[array1.length + j] = array2[j]
}

console.log(array3);