//practice builtin array method in js

const array1 = ['php', 'node', 'java', 'javascript', 'python'];

const array2 = ['php', 'node', 'java', 'javascript', 'python'];

const checkarray = array1.every(cl => array2.some(nl => cl.includes(nl)));

console.log(checkarray);




// indexof
const name = ['ramesh', 'ravi', 'lal bahadur'];
console.log(name.indexOf('ravi'))


//string useful method

const firstname = "nischal";
const lastname = "baniya";

const fullname = firstname + lastname;
console.log(fullname);
const concat = firstname.concat(" ", lastname);
console.log(concat);

console.log(fullname.indexOf('s'));

//object method

const studentdetails = {
    physics: 77,
    chemistry: 67,
    math: 89,
    biology: 67
}

// const convertObjectToArray = Object.entries(studentdetails); this return value with subject
// const convertObjectToArray = Object.values(studentdetails); this return the second value

const convertObjectToArray = Object.keys(studentdetails); // this return only subject of the object


console.log(convertObjectToArray);

const studentArray =['hari', 'om', 'jagdish'];
studentArray.splice(0,0,'ram');
console.log(studentArray);;
//for the deletion of the data ion array

let details = ['engineer', 'doctor', 'pilot', 'lawyer'];
details.sort((a,b) => a.localeCompare(b));

console.log(details);

const details1 = [12,43,54,656,777];

details1.splice(0, 1);
console.log(details1);