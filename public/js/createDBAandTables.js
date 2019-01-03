let mysql = require("mysql");

let con = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin",
  database: "lsystems"
});
con.connect(function(err){
	if (err) throw err;
  console.log("Connected!");
  let sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(255), password VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });});
