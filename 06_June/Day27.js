//difference between synchronaus and asynchronaus behaviour and implementation of promise handing to minimize the issue
const bcrypt = require("bcryptjs");

let encryptedPass;

async function PasswordHashing(pass){
    const encrypt = await bcrypt.hash(pass, 10);
    return encrypt;
}

// PasswordHashing('hashedPAssword')
// .then((res) => {
//     encryptedPass = res;
//     PasswordVerification('hashedPAssword')
// })

async function PasswordVerification(pass){
    const passchecker = await bcrypt.compare(pass, encryptedPass);
    if(passchecker) console.log('Password matched');
    else console.log('Password does not match');
}


//advance js
//Map Concept

//there are two types of map used and they are functional map and class map

let classMap = new Map([
    ['name', 'nischal baniya'],
    ['email', 'nisal@gmail.com'],
    ['faculty', 'IT'],
    ['isEligible', true]
])

classMap.set('degree', 'bachelor') //setting value on map using setter
console.log(classMap);
console.log(classMap.size); // accessing the size of key value
console.log(classMap.keys()); // accessing only the keys from map
console.log(classMap.values()); // accessing only the values from map

// console.log(classMap.get('name'));

//we can also used loop

console.log(`------------------------------using forEach----------------------------`);
classMap.forEach((val, key) => {
    console.log(`${key}: ${val}`);
})

console.log(`------------------------------using for of-----------------------------`);

for(const x of classMap){
    console.log(`${x[0]}: ${x[1]}`);
}

//note we can use any data type in map
