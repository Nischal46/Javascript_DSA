let laptopdetails = [
    ['dell', 'acer', 'hp'],
    ['lenovo', 'asus'],
    ['macbook']
];

console.log('initial array', laptopdetails);

const mergingarray = laptopdetails.reduce((acc, arr) => acc.concat(arr), []);
console.log('after merging', mergingarray);

let anotherarray = {
    class11books: ['computer', 'physics', 'chemistry'],
    class12books: ['programming', 'math']
}
console.log('object of books', anotherarray);
const objectmergeintoarray = Object.values(anotherarray).reduce((acc, arr) => acc.concat(arr), []);
console.log('final array from object', objectmergeintoarray);