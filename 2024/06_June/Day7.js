// pagination concept

let studentdetails = [
    {name: 'ram', email: 'ram@gmail.com', faculty: 'IT'},
    {name: 'shyam', email: 'shyam@gmail.com', faculty: 'BBA'},
    {name: 'hari', email: 'hari@gmail.com', faculty: 'IT'},
    {name: 'laxman', email: 'laxman@gmail.com', faculty: 'BHM'},
    {name: 'gopal', email: 'gopal@gmail.com', faculty: 'BBA'},
    {name: 'sundar', email: 'sundar@gmail.com', faculty: 'IT'},
    {name: 'krishna', email: 'krishna@gmail.com', faculty: 'BHM'}
]


class Student{
    constructor(array, page){
        this.array = array;
        this.page = page;
    }

    pagination(){
        const page = this.page * 1 || 1;
        const limit = page + 2;
        // const skip = (page - 1) * limit 

        this.array = this.array.slice(page, limit);

        return this;
        
    }

    addDetails(){
        const name = 'nischal';
        const email = 'nischal@gmail.com';
        const faculty = 'MIT'

        this.array.push({name, email, faculty});

        return this;
    }
}

// const obj = new Student(studentdetails, 3).pagination();

const obj = new Student(studentdetails, 3).addDetails();

console.log(obj);

let string = 'reverse this string'

//1st approach
//new variable is assigned to keep the iteration
let array = []
for(let i = string.length; i >= 0; i--){
    array.push(string[i]);
}
array = array.join("")
console.log(array);


//2nd approach
console.log([...string].reverse().join(''));

//capitalizing the first letter in case the user pass the name input letter all in small

let userinput = 'ramesh' // to send the name before the submitting we can change
let correctNameCase = userinput[0].toUpperCase() + userinput.slice(1)

console.log(correctNameCase);

//padstart and padend are also the useful method when we want to expose little credentials and expose other 
//such as the bank account umber and the user username in some case

let accountNumber = '5465765768756566';
let encodedNum = accountNumber.slice(-4).padStart(accountNumber.length, '*');
console.log(encodedNum);