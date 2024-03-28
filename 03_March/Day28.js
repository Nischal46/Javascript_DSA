const mysql = require('mysql');
const dotenv = require('dotenv').config({path: './config.env'})

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});

//getting data from the database 
pool.query('select * from blog', (err, result, fields) => {
    if(err) return console.log(err);
    console.log(fields);
    return console.log(result);
})

//adding of the data in database
// pool.query("insert into blog (activity, username, email, date) values ('Myagdi is the largest district', 'saroj bhusal', 'saroj@gmail.com', '2024-03-02')", (err, res) => {
//     if(err) return console.log(err);
//     return console.log(res);
// })