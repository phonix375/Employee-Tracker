const mysql = require('mysql2/promise');
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '*******',
  database: 'cms',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

console.log('connected to the database')


module.exports = pool;