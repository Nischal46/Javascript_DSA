//high order function

function function1(){
    console.log("Hello this is function 1")
}

function function2(nextPassFn){
    console.log("This is concept of high order fn")
    nextPassFn();
}

function2(function1);