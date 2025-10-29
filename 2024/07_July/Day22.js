const express = require('express');

const mysqldb = require('mysql2');

const rateLimit = require('express-rate-limit');
const { max } = require('lodash');

const app = express();

// const input = require('readline-sync');
app.use(express.json())

const dbconn = mysqldb.createPool({
    host: 'localhost',
    database: 'practicingQuery',
    user: 'root',
    password: ''
})

const dbPromise = dbconn.promise();

const limiter = rateLimit({
    max: 3,
    windowMS: 60 * 60 * 1000,
    message: 'Too many request from this IP So try after an hour'
})

app.use((req, res, next) => {
    // const ipAddress = req.ip;
    // console.log(req.headers);
    // console.log(`IP Address config: ${ipAddress}`);
    // next();

    const ip = req.headers['cf-connecting-ip'] || req.headers['x-real-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    console.log(`IP Address config: ${ip}`);
    next();
})

app.use(limiter)
// const usernameinput = input.question("Enter user name: ");
// const useremailinput = input.question("Enter user email: ");
// const userpasswordinput = input.question("Enter user password: ");

app.get('/users', async function(req, res){

    try {
    const [rows, fields] = await dbPromise.query(`SELECT * FROM USERS`);
    // console.log(rows);

    res.status(200).json({
        status: 'success',
        data: rows
    })
    } catch (error) {
        console.log('Error caught ', error);
        console.log(error);
    }
})

app.post('/users', async function (req, res) {
    console.log(req.headers);

    const {user_name, user_email, user_password} = req.body;
    try {
        const [result] = await dbPromise.query(`INSERT INTO USERS (user_name, user_email, user_password) VALUES (?, ?, ?)`, [user_name, user_email, user_password]);
        console.log(result);
        console.log('Data inserted successfully in db');
        res.status(200).json({
            status: 'success',
            message: 'Data inserted successfully'
        })
    } catch (error) {
        console.log('Error caught ', error);
        console.log(error);
    }
    
})


app.listen(8000, function(){
    console.log('Application running successfully');
})
