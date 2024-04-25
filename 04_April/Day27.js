// higher order function

function MainClass(callback){
    callback();
}

function SecondClass(){
    console.log('This is the secondary class');
}

MainClass(SecondClass)