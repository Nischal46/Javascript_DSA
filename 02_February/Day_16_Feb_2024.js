//getter and setter

//using constructor function

function StudentDetails(name, email, password){
    this._name = name;
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'password', {
        get: function(){
            return `Your password is ${this._password}`
        },
        set: function(val){
            this._password = val
        }
    })
}

const st1 = new StudentDetails('Nischal', 'baniyanisal12@gmail.com', 'abc123');
console.log(st1);

console.log(st1.password);