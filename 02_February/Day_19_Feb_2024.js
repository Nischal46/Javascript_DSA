//writing a program that we pass the id and convert the array of the details of the instructor 
//eligible to true 

let gymInstructor = [
    {
        id: 123,
        name: 'rakesh',
        experience: '2yrs',
        eligible: false
    },
    {
        id: 874,
        name: 'sunny',
        experience: '1yrs',
        eligible: false
    }
];

console.log('Initial table of the details of the instructor');
console.table(gymInstructor);

function Checkeligibility(inst_id){
    gymInstructor =  gymInstructor.map((prev) => {
        console.log(prev.id, inst_id);
        if(prev.id === inst_id){
            return {...prev, eligible: !prev.eligible}
            
        }

        return prev;
    })

    return gymInstructor
    
}

Checkeligibility(123);


console.log('After changing the eligible criteria of instructor: ');
console.table(gymInstructor);

let mobilearray = [
    {
        name: 'samsung',
        price: 50000,
        manufacture: 'Japan',
        isAvailable: false
    },

    {
        name: 'Oppo',
        price: 30000,
        manufacture: 'Japan',
        isAvailable: false
    },

    {
        name: 'Iphone',
        price: 120000,
        manufacture: 'Japan',
        isAvailable: false
    },

    {
        name: 'Red MI',
        price: 20000,
        manufacture: 'Japan',
        isAvailable: false
    }
]

console.table(mobilearray)

mobilearray.forEach((item, index) => {
    if(item.price <= 30000){
        mobilearray[index].isBudgetFriendly = true;
    }
    else{
        mobilearray[index].isBudgetFriendly = false;
    }
})

console.log('list of budgeet friendly mobile under 30000');
console.table(mobilearray)