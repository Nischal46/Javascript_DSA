let num = [23, 12, 43, 41, 90, 76];

let ascendingarray = num.sort();

console.log(ascendingarray);


let filterarray = num.filter(cl => {
    if(cl < 20) return cl;
})

console.log(filterarray);