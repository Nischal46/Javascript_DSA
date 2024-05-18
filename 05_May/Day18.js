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


async function asyncLoginsystem(username, password){
    if(username === "admin" && password === "admin"){
        return await "successful login";
    }

    else{
        return await "login failed"
    }
}

asyncLoginsystem('admin', 'admi')
.then((res) => console.log(res))
.catch((err) => console.log(err))