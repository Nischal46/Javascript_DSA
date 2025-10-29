const mysql = require('mysql2');

const dbPool = mysql.createPool({
   database: 'practicingQuery',
   host: 'localhost',
   user: 'root',
   password: ''
})

function DataBaseConnection(){
   return new Promise((resolve, reject) => {
      dbPool.getConnection((err, conn) => {
         if(err){
            return reject(err);
         }

         resolve(conn);
      })
   })
}

DataBaseConnection().then(res => console.log('Database Connection Successfull'))
.catch(err => console.log('Database Connection Failed'));