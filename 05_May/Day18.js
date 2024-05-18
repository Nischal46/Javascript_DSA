//promise handling in js

function Loginsystem(username, password){
    return new Promise((resolve, reject) => {
        if(username === "admin" && password === "admin"){
        resolve('Successfully login')
        }
        else{
            reject('Wrong credentials')
        }
    })
}

Loginsystem('admin', 'admin')
.then((res)=> console.log('Successfully login'))
.catch((err)=> console.log('Wrong credentials'))