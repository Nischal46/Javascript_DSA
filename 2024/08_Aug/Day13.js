//operators are used to do mathematical calcilations and logical operations

const { log } = require("console");
const input = require('readline-sync');

let a = 12;
// this is assignment operators.

let b = 3 * 5;
// this is multiplication operator

let d = 2 - 1;


// log('a' == 'b');

//short curcuiting

if (2 == 1 || 4 > 2) {
    console.log('This is short curcuiting using Logical OR operator');
}

//short curcuiting because it expects only one logical expression to be true.

if (2 > 1 && 3 > 1) {
    console.log('This is short curcuiting using logical AND operator');

}

//nullish coalicing
//when there are two operand or logic expression and if the left hand operands fails to return data or it may return null then we can use 
// right hand operand to get the value . for example

let name = "Remix developer";
let namesupport = "developer";

let nullishresult = name ?? namesupport;
console.log(nullishresult);


//built in functions

let string = "copy";
// console.log(string.charAt(1));

//if we want to check whether the string contains word or not

let apikey = 'abschf1234';
// log(apikey.includes('1234'))

//trim is one of the most used cases such as in password or sql query

let userpassword = '      sdsfdsfd           343242323';
// log('user password is ', userpassword.replace(/\s+/g, ''))

let fruits = "apple, banana, orange, mango, avacado";
//we can convert string into array
// log(fruits.split(", "));



//high order function

function adding(a, b, cb) {
    let result = a + b;
    cb(result);
}

adding(3, 5, function (res) {
    log('Finally getting value: ', res)
})


function PersonDetails(name, email, cb) {
    if (name.length < 5 && !email.includes('@') && !email.includes('.')) {
        return cb('Invalid data')
    }

    else {
        cb(name + email);
    }
}

function Greeting(res) {
    console.log('Hello from the callback function', res);
}

PersonDetails('nischal', 'nischal@gmail.com', Greeting);

//callback function and promises in javascript
//synchronous code will follow the top to down code execution technique
// in vast and complex application it will hamper the code flow

function PrimaryFunction() {
    setTimeout(() => {
        console.log('This had been executed after 5 seconds');

    }, 10000)
}

function SecondaryFunction() {
    setTimeout(() => {
        console.log('This had been executed after 3 seconds');

    }, 3000)
}

function Tertaryfunction() {
    setTimeout(() => {
        log('This had been executed after 4 seconds')
    }, 4000)
}

console.log('This is not inbound in asynchronous');

// PrimaryFunction();
// SecondaryFunction();
// Tertaryfunction();


//Callback function and its execution

function Login(email, password, cb) {
    log('Please wait while checking with database')
    setTimeout(function () {
        cb(email, password)
    }, 3000)
}

function DashboardCall(inp1, inp2, cb) {
    console.log(`
        ----------------Dashboard---------------
        welcome: 
        Name: ${inp1} and email: ${inp2}
        `);

    cb();
}

function ProfileSection() {
    log('This account wil be activated for 3 months.');
}

// Login('nischal', 'nischal@gmail.com', function (inp1, inp2) {
//     DashboardCall(inp1, inp2, function () {
//         ProfileSection();
//     });
// })

//Promises handling

function Promise1(email, pass) {

    return new Promise((resolve, reject) => {

        if(email !== "" || pass !== ""){
            resolve({email, pass});
        }

        else{
            reject("Invalid operations.")
        }

    })

}

// function Promise2() {

// }

// const useremail = input.question("Enter user email: ");
// const userpassw = input.question("Enter user password: ");

// Promise1(useremail, userpassw)
// .then((data) => {
//     console.log(data);
// }).catch((err) => {
//     console.log(err)
// })

let products = 'dell monitor';

products = 'asus monitor'

log('----------------product value--------------', products);

const productObject = {
    name: 'dell monitor',
    price: 25000
}

Object.freeze(productObject)

productObject.name = 'asus monitor';
productObject.color = 'black';

log('-------------Object of the product is -------------', productObject);

//object literals

const keyname = 'name';


//computed property key
const prodObjDetails = {
    [keyname]: 'fantech',
    price: 1500,
    product: 'mouse'
}

log('-----------Enhanced Product Details--------------', prodObjDetails);

//creating copy of object and its array

//we can create a copy either by shallow copy or deep copy

//if we only want to have copy of the 1st level then shallow copy is ok
//but if we want all the level of the object or array to be copied then deep copy is recommended

let obj1 = {
    name: 'nischal',
    email: 'nischal@gmail.com',
    contact: '98XXXXXXXXX',
    otherdetails: {
        language: 'js'
    }
}

// let obj2 = obj1; //this will not copy the object it will reference to the same location of memory

let obj2 = {...obj1} //shallow copy

obj2.email = 'baniyanisal@gmail.com'; // this will not affect the 1st level
// obj2.otherdetails.language = 'js with ts'; // this will affect the main object

log(obj1)


let obj3 = JSON.parse(JSON.stringify(obj1))

obj3.otherdetails.language = "php";

log('main object: ', obj1);
log('Secondary object: ', obj3)

// setInterval(function(){
//     log('This is set interval timeout function')
// }, 1000);

function adding(...items){
    let sum = 0;
    for(const x of items){
        sum += x;
    }

    log('The total sum is ', sum)
}

adding(1,2,3);

