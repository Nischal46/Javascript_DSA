//difference between synchronaus and asynchronaus behaviour and implementation of promise handing to minimize the issue
const bcrypt = require("bcryptjs");

let encryptedPass;

async function PasswordHashing(pass){
    const encrypt = await bcrypt.hash(pass, 10);
    return encrypt;
}

PasswordHashing('hashedPAssword')
.then((res) => {
    encryptedPass = res;
    PasswordVerification('hashedPAssword')
})

async function PasswordVerification(pass){
    const passchecker = await bcrypt.compare(pass, encryptedPass);
    if(passchecker) console.log('Password matched');
    else console.log('Password does not match');
}
