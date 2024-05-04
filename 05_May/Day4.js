class Student{
    constructor(name, email, faculty){
        this.name = name;
        this.email = email;
        this.faculty = faculty
    }

    details(){
        console.log(`Your name ${this.name}. Email Address ${this.email} and faculty ${this.faculty}`);
    }
}

const stobject = new Student('Nischal', 'baniyanisal12@gmail.com', 'IT');

console.log(stobject);

stobject.details();
