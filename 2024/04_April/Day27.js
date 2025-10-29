// higher order function

function MainClass(callback){
    callback();
}

function SecondClass(){
    console.log('This is the secondary class');
}

MainClass(SecondClass)

//passing arguement and accept in callback

function Parent(callback, arg){
    callback(arg);
}

function child(arg){
    console.log(`${arg} from highorder function`);
}

Parent(child, 'arguement pass')

//for of loop

let string = 'helping'

for(const i of string){
    if(i === 'i'){
        console.log('It contains i letter in string');
        return
    }

    console.log(i);
}