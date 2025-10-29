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


class User{
    constructor(username, password){
    this.username = username;
    this.password = password;
    }

    get username(){
        return this._username + '@123'
    }

    //inorder to get the value we must declare the setter function

    set username(value){
        this._username = value
    }
}

const user1 = new User('nisal', 'admin');
console.log(user1);
console.log(user1.username);

let arr = [1, 2, 6, 5, 4, 9, 8];

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = temp;
        }
    }
}

for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length; j++){
        if(arr[j] < arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1]
            arr[j+1] = temp;
        }
    }
}

console.log('ascending array is ', arr);
console.log('descending array is ', arr);