const mysql = require('mysql');
const dotenv = require('dotenv').config({path: './config.env'})

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

//getting data from the database 
// pool.query('select * from blog', (err, result, fields) => {
//     if(err) return console.log(err);
//     console.log(fields);
//     return console.log(result);
// })

//adding of the data in database
// pool.query("insert into blog (activity, username, email, date) values ('Myagdi is the largest district', 'saroj bhusal', 'saroj@gmail.com', '2024-03-02')", (err, res) => {
//     if(err) return console.log(err);
//     return console.log(res);
// })

let arr = [12,34,65,87,98,56];

const evennum = arr.reduce((acc, el) => {
    if(el%2 === 0) return [...acc, el];
    else return acc;
}, [])

console.log(evennum);

let num2 = [8,3,4,[6,5]]

console.log(num2);

const flatmap = num2.flatMap(cl => cl);
console.log(flatmap);