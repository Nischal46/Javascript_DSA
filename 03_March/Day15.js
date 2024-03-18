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

// console.log(RecursionFactorial(5));

//bubble sort algorithm to rearrange the array of object in ascending order

let instruments = [
    {
        name: 'guitar',
        price: 12000,
        brand: 'mantra'
    },
    {
        name: 'flute',
        price: 1000,
        brand: 'buddha flute'
    },
    {
        name: 'ukulele',
        price: 4000,
        brand: 'Ranch'
    },
    {
        name: 'harmonium',
        price: 18000,
        brand: 'Bira'
    }
];

//arranging instruments in ascending order
for(let i = 0; i < instruments.length; i++){
    for(let j = 0; j < instruments.length - 1; j++){
        if(instruments[j].price > instruments[j+1].price){
            let temp = instruments[j];
            instruments[j] = instruments[j+1];
            instruments[j+1] = temp
        }
    }
}

// console.log(instruments);

function FibonacciSeries(no){
    const fibarr = [0,1];

    for(let i = 2; i<=no; i++){
        fibarr[i] = fibarr[i-1] + fibarr[i-2]
    }

    return fibarr
}

// console.log(FibonacciSeries(6));

//constructor function

function License_Management_System(name, contact, district, category){
    
    this.name = name;
    this.contact = contact;
    this.district = district;
    this.category = category;

}

License_Management_System.prototype.checkCategory = function(){
    if(this.category === 'A') console.log('Applied for Bike, Scooter');
    else if(this.category === 'B') console.log('Applied for Car, Jeep');
}

const cus1 = new License_Management_System('Nischal Baniya', 9844445422, 'Lalitpur', 'A');
console.log(cus1.checkCategory());


