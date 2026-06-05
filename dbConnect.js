const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'PAPA9977684986',
    database: 'nodedatabase'
});

module.exports = connection;

connection.connect(function(err){
    if(err){
        console.log("Error....",err.message);
    }
    else{
        console.log("Database connected")
    }
})

module.export = connection;