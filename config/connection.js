var mysql = require("mysql");

var connection = mysql.createConnection(process.env.PORT || {
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId +" db: " + connection.database);
});

module.exports = connection;