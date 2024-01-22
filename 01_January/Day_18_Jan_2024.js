//practice builtin array method in js

const array1 = ['php', 'node', 'java', 'javascript', 'python'];

const array2 = ['php', 'node', 'java', 'javascript', 'python'];

const checkarray = array1.every(cl => array2.some(nl => cl.includes(nl)));

console.log(checkarray);




// indexof
const name = ['ramesh', 'ravi', 'lal bahadur'];
console.log(name.indexOf('ravi'))