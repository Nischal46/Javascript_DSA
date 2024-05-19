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

class License_Management_System {
    constructor(user_name, user_contact, user_email_address, user_category){
        this.name = user_name;
        this.contact = user_contact;
        this.email = user_email_address;
        this.category = user_category;
    }

    set contact(value){
        if(value.length < 10){
            console.log('contact number must be 10 digits');
        }
        else if(isNaN(value)){
            console.log("Contact number should be integer not string");
        }

        else {
            return this._contact = value;
        }
    }

    get contact(){
        return this._contact;
    }

    set email(value){
        if(value.includes('@') && value.includes('.')){
            return this._email = value;
        }

        else{
            console.log("Email is not authentic. Please use authentic email address");
        }
    }

    get email(){
        return this._email;
    }

    set category(value){
        if(value.includes('A' || 'B' || 'G')){
            return this._category = value;
        }
        else{
            console.log('Please use valid category.');
        }
    }

    get category(){
        return this.__category;
    }
}

const cus1 = new License_Management_System('Nischal Baniya', 9263454567, 'baniyanisal12@gmail.com', 'A');
console.table(cus1);