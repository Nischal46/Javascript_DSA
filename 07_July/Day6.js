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


const newobj = new Registration('nischal', 'nischalgmail.com', 'admin')
console.log(newobj);