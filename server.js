
let express = require("express");
let mysql = require("mysql");
let data = require("./public/json/test.json");
let app = express();

app.use(express.static(__dirname+'/public/'));
app.set('views', __dirname + '/views');
app.set('js',__dirname +'/js');


let con = mysql.createConnection({
	host: "localhost",
	user: "admin",
	password: "admin",
	database: "lsystems"
});

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/views/index.html');
});
app.get("/editFractals/randomize",function(req,res){
	res.send(data);
});
app.get('/signIn', function(req, res) {
	// let request = {
	// 	username:req.query.username,
	// 	password:req.query.password
	// };
	// con.connect(function(err) {
	// 	console.log("Connected!");

	// 	var sql = "Select username,password from users where username='"
	// 	+request.username+"' and password='"+request.password+"';";
		
	// 	con.query(sql, function (err, result,fields) {
	// 		if(result.length > 0){
				res.sendFile(__dirname+'/views/enterAsUser.html');
	// 		}
	// 		else{
	// 			res.sendFile(__dirname+'/views/index.html');
	// 		}
	// 	});
	// });
});
app.get('/signUp', function(req, res) {
	res.sendFile(__dirname+'/views/signUp.html');
});

app.get('/editFractals', function(req, res) {
	res.sendFile(__dirname+'/views/editFractals.html');
});

app.get('/continue', function(req, res) {
	res.sendFile(__dirname+'/views/continue.html');
});

app.get('/download', function(req, res) {
	res.sendFile(__dirname+'/views/download.html');
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
	// let response = {
	// 	username:req.query.username,
	// 	password:req.query.password
	// };
	// con.connect(function(err) {
		
	// 	if (err)
	// 		throw err;
	// 	console.log("Connected!");
		
	// 	var sql = "INSERT INTO users (username, password) VALUES ('"
	// 	+response.username+"', '"+response.password+"')";
		
	// 	con.query(sql, function (err, result) {
	// 		if (err) throw err;
	// 		console.log("1 record inserted");
	// 	});
	// });
	res.sendFile(__dirname+'/views/enterAsUser.html');
})


var server = app.listen(8085, function () {
	var host = server.address().address
	var port = server.address().port

	console.log("Example app listening at http://%s:%s", host, port)
})
//node server.js