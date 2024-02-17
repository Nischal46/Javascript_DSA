// //destructuring the array object

// const starray = [
//     {
//         name: "nischal baniya",
//         isverified: true,
//         email: 'nisal@gmail.com'
//     },

//     {
//         name: 'parkash dahal',
//         isverified: false,
//         email: 'parkash@gmail.com'
//     },

//     {
//         name: 'samaya chhetri',
//         isverified: true,
//         email: 'samaya@gmail.com'
//     }
// ];

// console.log(starray);
// console.log('destructuring the array');

// const [first, ,second] = starray;
// console.log(first, second);

// //destructuring the object

// const stobject = {
//     name: 'nisal',
//     contact: 98676484984,
//     email: 'nisal12@gmail.com',
//     username: 'nisal@12'
// };

// const {name, contact, email, username} = stobject;

// console.log('student name is ', name);
// console.log('student contact number is ', contact);

//Promise: promise resolve and reject
// should create and consume the promise

//this promise will execute last

const promiseDefine = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('This line is executed after the suceed of settime function at 2 sec');
        resolve();
    }, 2000)
})

promiseDefine.then(function(){
    console.log('Called this line after the successfull resolve of the defined promise');
})


//this promise will execute first
const promiseConcept = new Promise(function(resolve, reject){
    if(2+2 === 5) resolve()
    else reject('calculation is wrong')
}).then(function(){
    console.log('Successfully handled the promise');
}).catch(function(err){
    console.log(`error: ${err}`);
})



