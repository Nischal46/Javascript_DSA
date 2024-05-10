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

// AdminLoginSystem('admin@gmail.com', 'admin1')
// .then((res) => console.log('Successful Login'))
// .catch((err) => console.log('Login failed'))

// alternative way async await

async function RegistrationSystem(name, email, password){
    if(name === "") throw await "Name should not be empty"
    else if(!email.includes('.') || !email.includes('@')) throw await "Email should be valid"
    else if(!password < 8) throw await "Password length must be greater than eight character"

    else return await "Successful registration"
}

RegistrationSystem('Nischal', 'nisal@gmail.com', 'passwor')
.then((res) => console.log('Successful registration'))
.catch((err) => console.log(`Failed registration: ${err}`))