//lexical scope

// it deals with the concept of the nested function and accessing value

let global_variable_x = 7;

function OneLevelFunction(){
    console.log('---------This is one level function------------------');
    console.log('-----global variable is incremented-------', global_variable_x+=1);

    let one_level_variable = 3;

    function TwoLevelfunction(){
        console.log('----------------This is two level function--------------------');
        console.log('------------one_level_variable is incremented--------------', one_level_variable+=1);
        
        
    }

    return TwoLevelfunction;
    
}

//we can access the inside value function that is one_levek_variable from the outside of the function.
console.log('global varaiable access from outside: ', global_variable_x);

let result = OneLevelFunction();
//although we cannot get the varaible value of onelevel function deirectly from outside of the scope but 
//with the help of the child function we can access it and this process is also known as closures
result();

//closure with IIFE

const IIFEFunction = (()=> {
    let count = 0;
    console.log(`Initial value: ${count}`);
    return () => {
        count += 1;
        console.log(`Value is ${count}`);
        
    }
    
})();

IIFEFunction()

IIFEFunction()

//Rest parameter in function

function RestParameterConcept(...params){
    let stringconcat = '';
    for(const cl of params){
        console.log('The function parameter are: ', cl);
        stringconcat += cl + ' ';
    }
    console.log('The participants are: ', stringconcat);
    
}

RestParameterConcept('nischal', 'dinesh', 'sabin')
