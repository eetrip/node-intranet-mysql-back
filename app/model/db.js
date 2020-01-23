"user strict";

var mysql = require("mysql");

// connect to a local mysql database
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysql",
  database: "mydb"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
