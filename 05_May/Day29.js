//fizzbuzz program

function FizzBuzz(arr){
    for(const cl of arr){
        if(cl % 3 == 0 || cl % 5 == 0){
            console.log(`${cl} is a fizzBuzz number`);
        }
        else if(cl % 3 == 0) console.log(`${cl} is a Fuzz Number`);

        else if( cl % 5 == 0) console.log(`${cl} is a Buzz Number`);

        else console.log(`${cl} is not a FizzBuzz Number`);
    }
}


let noArray = [2,3,5, 10, 15, 20, 25, 35]
FizzBuzz(noArray)