function IdentifyingDataTypes(inputdata){

    if(inputdata instanceof Array){
        console.log('It is array data type');
    }

    else if(typeof inputdata === 'object'){
        console.log('It is object data type');
    }
   
}

// let response = [2,3,4]
let response = {
    name:'abc'
}

// IdentifyingDataTypes(response)

// call method

function GetRegistrationNumber(){}

function Registration(name, email, password){
    this.name = name;
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email
        },
        set: function(val){
            if(!val.includes('@') || !val.includes('.')){
                console.log('Invalid email address');
            }
            else{
                this._email = val
            }
        },
        // emunerable: true
    })
}


// const newobj = new Registration('nischal', 'nischalgmail.com', 'admin')
// console.log(newobj);

//call method in js

function VotingEligible(age){
    return new Promise((resolve, reject) => {
        if(age > 18) resolve('User is verified and eligible for voting.');
        else reject('User is not verified and not eligible for voting.')
    })
}

function RegistrationUser(name, age, contact){
   
    VotingEligible.call(this, age).then(()=> {
        this.name = name;
        this.contact = contact;
        console.log(this);
    })
    .catch((err) => {
        console.log(err); 
    });
   
}

const objcall = new RegistrationUser('samin', 17, 98083232);
// console.log(objcall);