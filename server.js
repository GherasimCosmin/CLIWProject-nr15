
let express = require("express");
let mysql = require("mysql");
let app = express();

let con = mysql.createConnection({
	host: "localhost",
	user: "admin",
	password: "admin",
	database: "lsystems"
});

app.get('/', function(req, res) {
	res.send('Hello Cosmin');
});

app.get('/index', function (req, res) {
	console.log("Got a GET request for the homepage");
	response = {
		username:req.query.username,
		password:req.query.password
	};
	console.log(response);
	res.end(JSON.stringify(response));
})

// sign up route
app.get('/sign', function (req, res) {
	response = {
		username:req.query.username,
		password:req.query.password
	};
	con.connect(function(err) {
		
		if (err)
			throw err;
		console.log("Connected!");
		
		var sql = "INSERT INTO users (username, password) VALUES ('"
		+response.username+"', '"+response.password+"')";
		
		con.query(sql, function (err, result) {
			if (err) throw err;
			console.log("1 record inserted");
		});
	});
	console.log(response.username+" "+response.password);
	res.end(response.username+" "+response.password);
})

// This responds a POST request for the homepage
app.post('/index', function (req, res) {
	console.log("Got a POST request for the homepage");
	res.send('Hello POST');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
	console.log("Got a GET request for /list_user");
	res.send('Page Listing');
})

var server = app.listen(8085, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
})
//node server.js