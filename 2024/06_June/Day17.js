//object literal
// this is the object declaration with its properties

const objectLiteral1 = {
    tenderName: 'XYZ',
    tenderInitialDate: '2012',
    tenderCompletionDate: '2020'
}; 

//constructor function
//for an example we access fetch, Date, Promise etc many times and it is also a constructor function

//naming of the constructor function should be always uppercase
function Details(item, itemPrice, manufacture){

    //whenever the constructor function gets called it creates an empty object literal
    // console.log('Initial when the constructor fn gets called', this);
    this.item = item;
    this.itemPrice = itemPrice;
    this.manufacture = manufacture;

    return this;

    // console.log('Later when the value gets assign', this);
    //later it get assign its value with reference of this keyword and pass or return the value
}

const obj1 = new Details('headset', 2500, 'fantech');
const obj2 = new Details('mouse', 1500, 'fantech')
// console.log(obj1 instanceof Details);
// console.log(obj2);

//prtotypal behaviour
// in regard all the function object string array and object itself have the reference of the object prototypal inheritence

Object.prototype.description = function(){
    console.log('This is from the object');
}

let newArray = ['pen', 'pencil', 'copy'];

// newArray.description();

//call and this 

let userarray = ['nischal', 'nischal07']

function DBValidation(nameinput){
    return new Promise((resolve, reject) => {
        if(!userarray.includes(nameinput)) {
            this.nameinput = nameinput;
            resolve(this)
        }

        else{
            reject("username already exists.")
        }
    })
}

function RegistrationUser(name, email, password){
    DBValidation.call(this, name).then(() => {
        this.email = email;
        this.password = password
        console.log(this);
    }).catch((err) => console.log(err))
    
}

// const obj = new RegistrationUser('nischal63', 'nisal@gmail.com', 'asdf');

// console.log(obj);

function AxiosRequest(baseUrl){
    this.baseUrl = baseUrl;
    this.browser = 'google';
    this.mode = 'development';
}

function Serverconfiguration(project, baseurl){
    this.project = project;
    AxiosRequest.call(this, baseurl);

}

const obj4 = new Serverconfiguration('react project', 'http://www.axios.com');
// console.log(obj4); 

//apply method: if you want to deal with the array in params then 

function JSLibraries(p1, p2){
    return this.libraries = [p1, p2];
}

function ProgrammingLanguage(language, p1, p2){
    
    this.language = language;
    JSLibraries.apply(this, [p1, p2])
}

const newobj = new ProgrammingLanguage('js', 'react', 'jquery')
console.log(newobj);
