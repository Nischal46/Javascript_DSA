// closure concept

//all the defining value becomes global val and it can be accessed inside nested deeper function

function ParentFunction(){

    //inside parent scope

    let val = 3;
    console.log('initial val: ', val);

    function ChildFunction(){
        console.log('Child function 1');
    }

    return ChildFunction;
}

const output = ParentFunction();
console.log(output);

output();

let array = [21, 43, 56, 99, 69];

const num = array.filter(cl => {
    if(cl % 3 === 0) return cl;
});

console.log(num);