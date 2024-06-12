//higher order fn

function firstfn(fn){
    fn();
}

function Secondfn(){
    console.log('This is the fn that need ti be called');
}

firstfn(Secondfn)