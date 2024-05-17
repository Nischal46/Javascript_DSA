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


//flat map and flat

let numarray = [54, 543, 344, 12, [34, 56, 76, 70, [98, 54]]]

let flatarray = numarray.flat(2);
console.log(flatarray);

//flat five a option to deep dive into nested array whereas flatmap only works for one deeper array

let flatmaparray = numarray.flatMap(el => el);
console.log(flatmaparray);