// filter method in js

let array = [43, 65, 34, 23, 55, 68];

const numfilter = array.filter(cl => {
    if(cl %2 === 0) return cl
})

console.log(numfilter);