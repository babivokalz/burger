var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ndc9dopswpjqcwmt",
  password: "ttx0uumqiwqqo0yw",
  database: "vkt6nr8lblbvsmjz"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;

