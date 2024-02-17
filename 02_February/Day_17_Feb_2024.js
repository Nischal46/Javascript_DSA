//destructuring the array object

const starray = [
    {
        name: "nischal baniya",
        isverified: true,
        email: 'nisal@gmail.com'
    },

    {
        name: 'parkash dahal',
        isverified: false,
        email: 'parkash@gmail.com'
    },

    {
        name: 'samaya chhetri',
        isverified: true,
        email: 'samaya@gmail.com'
    }
];

console.log(starray);
console.log('destructuring the array');

const [first, ,second] = starray;
console.log(first, second);

//destructuring the object

const stobject = {
    name: 'nisal',
    contact: 98676484984,
    email: 'nisal12@gmail.com',
    username: 'nisal@12'
};

const {name, contact, email, username} = stobject;

console.log('student name is ', name);
console.log('student contact number is ', contact);

