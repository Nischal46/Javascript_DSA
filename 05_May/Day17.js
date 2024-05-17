// sort method in js

let namearray = ['ramesh', 'hari', 'avish', 'pradip', 'arun']

//soting namr in alphabetical ascending order

let ascname = namearray.sort((a, b) => a.localeCompare(b));
console.log(ascname);

//sorting name in descending order

let descname = namearray.sort((a,b) => b.localeCompare(a));
console.log(descname);

//filter method

let filtername = namearray.filter(function(cl){
    if(cl.startsWith('a')) return cl;
})

console.log(filtername);