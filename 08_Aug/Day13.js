//operators are used to do mathematical calcilations and logical operations

const { log } = require("console");

let a = 12;
// this is assignment operators.

let b = 3 * 5;
// this is multiplication operator

let d = 2 - 1;


// log('a' == 'b');

//short curcuiting

if(2==1 || 4 > 2){
    console.log('This is short curcuiting using Logical OR operator');
}

//short curcuiting because it expects only one logical expression to be true.

if(2>1 && 3>1){
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

function adding(a, b, cb){
    let result = a + b;
    cb(result);
}

adding(3, 5, function(res){
    log('Finally getting value: ', res)
})


function PersonDetails(name, email, cb){
    if(name.length < 5 && !email.includes('@') && !email.includes('.')){
        return cb('Invalid data')
    }

    else{
        cb(name+email);
    }
}

function Greeting(res){
    console.log('Hello from the callback function', res);
}

PersonDetails('nischal', 'nischal@gmail.com', Greeting);

//callback function and promises in javascript
//synchronous code will follow the top to down code execution technique
// in vast and complex application it will hamper the code flow



