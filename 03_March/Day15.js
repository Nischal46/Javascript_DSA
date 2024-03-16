//write a program that seperates the even and odd number and count the total value

let array = [1,2,3,4,5,6,7,8,9,10,11,12];

function SeperationofArray(arr){
    let i = 0;

    let evenarray = [];
    let oddarray = [];
    while(i < arr.length){
        if(arr[i] % 2 === 0){
            evenarray.push(arr[i])
        }
        else{
            oddarray.push(arr[i])
        }

        i++;
    }

    return {evenarray, oddarray};

}

// console.log(SeperationofArray(array));

//using error constructor

function CheckValid(){
   try {
    if(2+3 == 6){
        console.log('True')
    }
    else{
        throw 'Wrong Calculation'
    }
   } catch (error) {
    console.log('catch called: ', error);
   }
   
    
}

// CheckValid();

//Recursion Concept
//it is the concept to render the same name declared function inside its own.
//basically this is the concept which acts same like loop

function RecursiontoPrintNumber(no){
    console.log(`${no} time:`);
    if(no < 10) RecursiontoPrintNumber(no + 1);
}

let numstartwith = 1;
// RecursiontoPrintNumber(numstartwith)

function RecursionFactorial(no){
    if(no == 0){
        return 1;
    }

    return no * RecursionFactorial(no - 1)
}

console.log(RecursionFactorial(5));

