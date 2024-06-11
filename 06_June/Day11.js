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