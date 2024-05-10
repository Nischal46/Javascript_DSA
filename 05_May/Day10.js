// promise handling

function AdminLoginSystem(email, password){

    return new Promise((resolve, reject) => {
        if(email === 'admin@gmail.com' && password === 'admin'){
            resolve('Correct credentials')
        }

        else{
            reject('Wrong credentials')
        }
    })
    
}

AdminLoginSystem('admin@gmail.com', 'admin1')
.then((res) => console.log('Successful Login'))
.catch((err) => console.log('Login failed'))