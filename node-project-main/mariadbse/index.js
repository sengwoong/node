const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'dev01',
  password : '1234',
  database : 'dev'
});

connection.connect();

connection.query('SELECT * from customers', (error, rows, fields) => {
  if (error) throw error;
  console.log('User info is: ', rows);
});

connection.end();