//variables in js
//we declare variables with three keywords and they are var, let and const

var programmingLanguage = "JavaScript";

//var keyword is functional scope keyword as it can easily access through other libraries.

let programmingCourse = "MERN Stack";

// let programmingCourse = "JAVA Stack"; // it would throw an error as cannot redeclaring 

let programmingDetailsObject = {
    name: 'Javascript',
    libraries: 'React',
    framework: 'Remix, Next'
}
Object.freeze(programmingDetailsObject)
programmingDetailsObject.name = "Node JS";

console.log('-------programming object details-------------', programmingDetailsObject);
// object is mutable in all the keyword

let hoistingConcept;
console.log('declaring is supported by hoisted', hoistingConcept);
hoistingConcept = true;

//checking === or == operator

let numValue = 21;
let stringValue = '21';

console.log('Checking with == operator: ', numValue == stringValue);
console.log('Checking with === operator: ', numValue === stringValue)


let fruitArray = ["apple", "banana", "orange", "mango", "grapes"];

for (const x of fruitArray) {
    console.log(x);
}

for (const x in fruitArray){
    console.log(`Indexing ${x} :-> ${fruitArray[x]}`);  
}

let string1 = 0;
let string2 = 0;

console.log('Checking the two datavalue through object.is ', Object.is(string1, string2));

let arrayProduct = [
    {id: 1, name: 'fantech', product: 'mouse'},
    {id: 2, name: 'fantech', product: 'keyboard'},
    {id: 3, name: 'eyoso', product: 'keyboard'},
    {id: 4, name: 'razor', product: 'mouse'},
    {id: 5, name: 'dell', product: 'monitor'},
    {id: 6, name: 'samsung', product: 'laptop cooler'}
]

//we can access the length of the array
console.log('the actual length of the arrayproduct is ', arrayProduct.length);

let filtermouse = arrayProduct.filter((cl, ind) => cl.product === 'mouse');
console.log('filtering the product on the basis of mouse ', filtermouse);

console.log('-------------using foreach loop-----------------');

let newarrayproduct = [];

arrayProduct.forEach((el, ind) => {
    if(el.id > 3){
        newarrayproduct.push(el);
    }   
})

console.log('new array product: ', newarrayproduct);

let carCollection = ['BMW', 'Ferrari', 'Supra', 'Bugati'];
//if we want to create a new array then we should use slice array method

console.log('Original carCollection ', carCollection);


let newCarCollection = carCollection.slice(1, carCollection.length);
console.log('slice method to form a new array ', newCarCollection);

carCollection.splice(2,1);
console.log('splice method to modifies in existed array ', carCollection);

let laptopArray = ['dell', 'asus', 'samsung', 'acer', 'hp', 'lenovo'];
console.log(laptopArray.shift());
console.log('----------after shift----------', laptopArray);

laptopArray.unshift('aoc');
console.log('------------after unshift------------', laptopArray);

let checkingNumber = [12,34,54,65,76,87];

let greaterthan40 = checkingNumber.find(function(el){
    return el > 40;
})
console.log('---------using find method----------', greaterthan40);


let filtergreaterthan40 = checkingNumber.filter((cl) => cl > 40);
console.log('--------------------using filter method---------------', filtergreaterthan40);


let reduceMethod = arrayProduct.reduce((acc, cv) => {
    if(cv.name === 'dell' || cv.name === 'fantech'){
        acc.push(cv)
    }
    return acc;
}, [])

console.log('--------------using reduce method------------------', reduceMethod);

let stringchar = '@3dedew 32dfgdgfd !32sdfdsfds';

stringchar = stringchar.replace(/\s+/g, '').split('').filter(cl => cl !== '@').filter(cl => cl !== '!').reduce((acc, cv) => {
    if(acc[cv]){
        acc[cv]++;
    }

    else{
        acc[cv] = 1;
    }

    return acc;
}, {});

console.log(stringchar);


//write a program that generates the random Token

let tokenCharacter = '123213213dsfcdsffcdsfsd!@#@!#!@fdsdfsdf';

let generateToken = '';
for(let i=0; i<11; i++){
    generateToken += tokenCharacter[Math.floor(Math.random() * tokenCharacter.length)];
}

console.log('Password generator token: ', generateToken);

























