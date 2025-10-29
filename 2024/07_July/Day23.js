const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'practicingQuery'
});


connection.connect((err) => {
    if(err){
        console.log('Error in connecting to database: ', err);
        return
    }
    else{
        console.log('Successfully connected to database');
    }
})

const createUserTable = `CREATE TABLE IF NOT EXISTS BLOGUSER(u_id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(25) NOT NULL);`;

const createReviewTable = `CREATE TABLE IF NOT EXISTS REVIEW
(id INT AUTO_INCREMENT PRIMARY KEY, review VARCHAR(50) NOT NULL, user_id INT, FOREIGN KEY (user_id) REFERENCES BLOGUSER(u_id) ON DELETE CASCADE)`;

connection.query(createUserTable, (err, res) => {
    if(err){
        console.log('Error creating users table: ', err);
        return;
    }

    console.log('USer table created');

    connection.query(createReviewTable, (err, res) => {
        if(err){
            console.log('Error creating review table: ', err);
            return;
        }
    
        console.log('Review table created');
    
    })
})