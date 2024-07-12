// set concept in js

const uniqueVisitor = new Set();

function AddVisiter(visitorID){
    uniqueVisitor.add(visitorID);
}

AddVisiter('XCV1238');
AddVisiter('SDF2324');
AddVisiter('ERT2343');
AddVisiter('ERT2343');

// console.log('unique visitor ID:', Array.from(uniqueVisitor));

//closure concept
//that means lexical scope where var and value can be access through the 
//curly braces but not outside the scopes

let outsideglobalvar = 12;

function OneLevelLexicalScope(){
    //here the outer scope variable can be accessed through function
    console.log(outsideglobalvar);

    //let us define another variable inside this scope and this is accessable only 
    //inside this scope and its deep nested scope
    let insidescopevariable = 23;

    return function SecondLevelLexicalScope(){
        console.log('calling from the second deep level');
        console.log(insidescopevariable);
        return 'this is the closure property'

    }

    // SecondLevelLexicalScope()
}
// console.log(insidescopevariable); //basically this throws us an error
// const closureConcept = OneLevelLexicalScope();
// console.log(closureConcept());


//method chaining

function chainingMethod(initialtransaction){
    this.initialtransaction = initialtransaction;
    let amount = 0;

    this.addtransaction = function(balance){
        console.log('Dear customer your balance had been debited by', balance);
        amount = balance + this.initialtransaction;
        console.log(`Total balance: ${amount}`);
        return this;
    }

    this.deducttransaction = function(balance){
        console.log('Dear customer your balance had been credited by', balance);
        amount = amount - balance;
        console.log(`Total balance: ${amount}`);
        // return this;
    }
}

// const obj = new chainingMethod(250000);
// obj.addtransaction(100000).deducttransaction(20000)

//callback hell concept

function fn1(callback){
    setTimeout(() => {
        console.log('Data fetched');
        callback();
    }, 1000);
}

function fn2(callback){
    setTimeout(() => {
        console.log('Data processed');
        callback();
    }, 2000);
}

function fn3(callback){
    setTimeout(() => {
        console.log('Data saved');
        callback();
    }, 3000);
}

fn1(() => {
    fn2(() => {
        fn3(() => {
            console.log('finally all the operations are completed');
        })
    })
})