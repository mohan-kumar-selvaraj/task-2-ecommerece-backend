const mysql = require("mysql");
// Create MySQL connection

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "mohan",
//   password: "Mohan@123",
//   database: "fcommerce",
// });

const db = mysql.createConnection({
  host: "sql6.freemysqlhosting.net", //server in the login credentials in mail
  user: "sql6700273",
  password: "eK2ritf2cX",
  database: "sql6700273",
  port: 3306,
});
//mysql is hosted in https://www.freemysqlhosting.net/
//create and insert the table by using phpmyadmin and for that,s the link will be given in the registered mail

// Connect to MySQL

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Connected to MySQL");
});

module.exports = db;
