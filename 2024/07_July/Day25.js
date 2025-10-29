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


// higher order array


//forEach method
const array = ["js", "java", "c", "c++", "python", "c#"];

function Iteratable(item, ind){
    console.log(`${ind} :-> ${item}`);
    // if(item.includes("java") || item.includes("js")) console.log(`Mostly used in web development`);
    
}

// array.forEach(Iteratable); //here we have to give only reference of the function.

const dbresponse = [
    {userid: "u12", username: "user123", email: "user12@gmail.com"},
    {userid: "u13", username: "user134", email: "user13@gmail.com"}
]

// dbresponse.forEach(Iteratable);

//filter method
//it function on the boolean logic and directly return so the return value should be hold in new variable

const mobile = [
    {name: "samsung", price: 75000},
    {name: "apple", price: 120000},
    {name: "oppo", price: 45000},
    {name: "lava", price: 35000}
];

const filterBudgetMobile = mobile.filter(function (cd){
    return cd.price > 50000;
})

console.log(filterBudgetMobile);

//map method
// it is iterable

const nameArray = ['avishek', 'bibek', 'prapti', 'swostika'];

const mapData = nameArray.map((cd, ind) => {
    return `${ind + 1} Welcome ${cd}`
})

console.log(mapData);

//reduce method: one of the most useful and effective method 

const sumDetails = [
    {item: "paneer", price: 700},
    {item: "curd", price: 120},
    {item: "milk", price: 130}
];

const reduceMethod = sumDetails.reduce(function (acc, cval){
    return acc + cval.price
}, 0);

console.log('The total sum of the grocery is Rs', reduceMethod);


function sumofAll(n){
    let multipleof3 = [];
    let multipleof5 = [];
    let totalsum = 0;
    for(let i = 1; i <= n; i++){
        let multiple3 = 3 * i;
        let multiple5 = 5 * i;

        totalsum = totalsum + (multiple3 + multiple5)
        multipleof3.push(multiple3);
        multipleof5.push(multiple5)
    }

    console.log(multipleof3, multipleof5);
    console.log('total sum: ', totalsum);
}

sumofAll(4)