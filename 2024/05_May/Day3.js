// Promise handling in js

function checkGreater(a, b){
    return new Promise((resolve, reject) => {
        if(a > b) resolve('Success')

        else reject('Failed')
    })
}

checkGreater(6, 4)
.then((res) => console.log(`A is greater than B`))
.catch((err) => console.log(`A is smaller than B`))


// async await in js

async function Entry(name, email){
    let userName, userEmail;
    if(!name.includes(' ')){
        return 'User must include full name';
    }
    else userName = name;

    if(!email.includes('@') || !email.includes('.')){
        return 'User must include tha valid email address'
    }

    else userEmail = email

    return await [userName, userEmail];
}

Entry('Nischal Baniya', 'nisal@gmail.com')
.then((res) => console.log(`Result obtained: ${res}`))
.catch((err) => console.log('Error caught'))
.finally(x=> console.log('Perform async await successfully'));
