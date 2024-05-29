//fizzbuzz program

function FizzBuzz(arr){
    for(const cl of arr){
        if(cl % 3 == 0 && cl % 5 == 0){
            console.log(`${cl} is a fizzBuzz number`);
        }
        else if(cl % 3 == 0) console.log(`${cl} is a Fuzz Number`);

        else if( cl % 5 == 0) console.log(`${cl} is a Buzz Number`);

        else console.log(`${cl} is not a FizzBuzz Number`);
    }
}


let noArray = [2,3,5, 10, 15, 20, 25, 35]
FizzBuzz(noArray)

//constructor function

function ConstructorFunction(name, email){
    this.name = name;
    this.email = email;
    console.log(this);
}

ConstructorFunction.prototype.greeting = function(){
    console.log(`Welcome ${this.name} and your email account is ${this.email}`);
}

// to access the constructor function method peoperties we should declare the object
const obj = new ConstructorFunction('Nischal', 'baniyanisal@gmail.com')
obj.greeting();
