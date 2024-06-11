// higher order fn


//sample one 
function Mainfn(fn){
    console.log('Successfully enter in the main fn area');
    fn();
}

function Secondaryfn(){
    console.log('This is the secondary fn');
}

Mainfn(Secondaryfn);

//multiplication table using the higher order fn

function Multiplication(fnPassed){

    let num = 10;
    let res = fnPassed();
    console.log(res);

    for(let i = 1; i <= res; i++){
        console.log(`${num} * ${i} = ${num * i}`);
    }

}

let no = 5
function NoofTimes(){
    return no;
}

Multiplication(NoofTimes);
