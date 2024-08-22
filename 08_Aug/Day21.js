//functional programmings are first class citizes which means that the functions an do every things that variables can do

//first we can declare our functions with the variables

let loggingfn = function(msg){
    return msg
}
let res = loggingfn('This is functional programming approach') // here functions are variables

console.log(res);


const arrowfn = msg => console.log(msg);
arrowfn('This is also functional paradigm with arrow function')

// we can also add function in objects

const obj = {
    name: 'Nischal',
    email: 'nischal@gmail.com',
    greet (inp){
        console.log(`Hello ${inp}`);
        
    }
}

console.log(obj);
obj.greet('Nischal dev')

//we can also add function in array

const array = [
    'function stored in array',
    message => console.log(message)
]

console.log(array);
array[1]('This is arguement sent in function')

//funton that can be send to other function as an arguement



const insidefn = logger => {
    logger('This is high order function')
}

insidefn(function cb(parameter){
    console.log(parameter);
    
})

//second high order function approach

function HighLevelFunction(input1, input2, SecondLevelfunction){
    console.log(`Obtained from ${input1} and ${input2}`);

    SecondLevelfunction(input1, input2)
    
}



HighLevelFunction('Coder', 'JS', function SecondLevelfunction(param1, param2){
    console.log('This is callback function where it recieve value: ', param1, param2);
    
})

//imperative and declarative approaches



console.log('-------------------------------------------functional concepts-------------------------');

//immutable concepts

let original_color_description = {
    colorName: 'crimson',
    rate: 8,
    type: 'pencil color'
}

//change the properties of color without changing its original

function ChangeColorinput(input){
    return Object.assign({}, original_color_description, {type: input})
}

let copyingobject = ChangeColorinput( "Oil painting");

console.table(original_color_description);

console.table(copyingobject);

//pure and impure functions

const originalobject = {
    name: 'Nischal',
    email: 'nischal@'
}
