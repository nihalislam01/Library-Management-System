const mysql = require('mysql');
require('dotenv').config();

// const fs = require('fs');
// const sqlFilePath = './table.sql';
// const sqlCommands = fs.readFileSync(sqlFilePath, 'utf-8');

var connection = mysql.createConnection({
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) =>{
    if(!err) {
        console.log('connected');
    }
    else {
        console.log(err);
    }
})

// connection.query(sqlCommands, (err, results) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     connection.end();
// })

module.exports = connection;