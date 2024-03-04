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