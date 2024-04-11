const sqlite3 = require('sqlite3').verbose();
const input = require('readline-sync');

let db = new sqlite3.Database('./sqlite.db', (err) => {
    if(err){
        console.log('Database connection failed')
        return;
    }

    console.log('Database connection succeed');
});

db.run(`CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY, name TEXT, email TEXT)`, (err) => {
    if(err){
        console.log('Failed to create table', err);
        return;
    }

    console.log('Table created successfully');
})

let bool = true;

while(bool){

    console.log(`
    1. Press 1 to add the data in database
    2. Press 2 to get records of the database
    3. Press 3 to update the daatabase
    4. Press 4 to delete the record of the database
    `);

    const option = +input.question('Enter choice: ');

    switch(option){
        case 1:
            db.run(`INSERT INTO records (id, name, email) VALUES (1, nischal, nischal@gmail.com)`);
            console.log('Data inserted successfully');
            break;

        case 2:
            db.all(`SELECT * FROM records`, (err, rows) => {
                console.log(rows);
                if(err){
                    console.log('Failed to fetch the records');
                    return;
                }
                rows.forEach(row => {
                    console.log(`
                    id: ${row.id}
                    name: ${row.name}
                    email: ${row.email}
                    `);
                })

                // for(const i of rows){
                //     console.log(i);
                // }
            })
            break;


        default:
            console.log('Invalid option');
            break;

    }
}