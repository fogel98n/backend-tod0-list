const mysql= require('mysql2/promise')


const pool=mysql.createPool({
host: 'bz9u4bmovw5o5jnyaqlx-mysql.services.clever-cloud.com',
  user: 'ulo1d2tsdkmxduas',
  password: 'jmITWQMWU7LMjizciqgG',
  database: 'bz9u4bmovw5o5jnyaqlx',
  port: 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  ssl: {
    // Para desarrollo, acepta certificados autofirmados
    rejectUnauthorized: false
  }
})

module.exports=pool