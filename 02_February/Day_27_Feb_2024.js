//constructor function

let studentArray = [
    {id: 1, name: "Ram", degree: 'bachelor', status: 'married', gender: 'male'},
    {id: 2, name: "Shyam", degree: 'SEE', status: 'unmarried',  gender: 'male'},
    {id: 3, name: "Hari", degree: 'NEB', status: 'unmarried',  gender: 'male'},
    {id: 4, name: "Laxman", degree: 'bachelor', status: 'married',  gender: 'male'},
    {id: 5, name: "Krishna", degree: 'bachelor', status: 'unmarried',  gender: 'male'},
    {id: 6, name: "Parbati", degree: 'NEB', status: 'unmarried',  gender: 'female'},
    {id: 7, name: "Laxmi", degree: 'bachelor', status: 'married',  gender: 'female'}
]

function Student(array, searchInput, searchGender){
    // this.name = name;
    this.searchInput = searchInput,
    this.array = array,
    this.searchGender = searchGender
}

Student.prototype.SearchByDegree = function(){
    this.array = this.array.filter(ex => ex.degree === this.searchInput);
    return this;
}

Student.prototype.SearchByGender = function(){
    this.array = this.array.filter(ex => ex.gender === this.searchGender)
    return this;
}

const stobj = new Student(studentArray, "bachelor").SearchByDegree()
console.log(stobj);

const stobj1 = new Student(studentArray, '',"female").SearchByGender();
console.log(stobj1);

