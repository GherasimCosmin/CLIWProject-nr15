
function test(){
	fetch("http://localhost:8085/editFractals/randomize")
	.then(function(response){
		return response.json();
	})
	.then(function(response){
		console.log(response);
	});
}

