function drawCanvas(lsystem,angle){
	setUp(lsystem,angle);
};
function setUp(lsystem,angle){
	let canvas,drawobj;
	canvas=document.getElementById("thecanvas");
	drawobj = canvas.getContext("2d");
	drawobj.clearRect(0, 0, canvas.width, canvas.height);
	parseLSystem(lsystem,canvas,drawobj,angle);
}

//drawing logic
function parseLSystem(lsystem,canvas,drawobj,angle){
	console.log(lsystem);
	let currentState={
		currentPoz:{x: 1000,y:1000},
		theta:270
	}
	let len=10;
	drawobj.translate(0.5, 0.5);
	drawobj.moveTo(currentState.currentPoz.x,currentState.currentPoz.y);
	let log=[];

	for(let char in lsystem){
		switch(lsystem[char]){
			case "G" :
				drawobj.stroke();
				drawobj.beginPath();
				drawobj.moveTo(currentState.currentPoz.x + len *Math.cos(Math.PI * currentState.theta / 180.0), currentState.currentPoz.y + len * Math.sin(Math.PI * currentState.theta / 180.0));
				currentState.currentPoz.x = currentState.currentPoz.x + len *Math.cos(Math.PI * currentState.theta / 180.0);
				currentState.currentPoz.y = currentState.currentPoz.y + len * Math.sin(Math.PI * currentState.theta / 180.0);
				break;
			case "+" :
				if(currentState.theta+angle<360){
					currentState.theta=currentState.theta + angle;
				}
				else{
					currentState.theta = currentState.theta + angle - 360;
				}
				break;
			case "-" :
				if(currentState.theta-angle>0){
					currentState.theta=currentState.theta - angle;
				}
				else{
					currentState.theta = currentState.theta - angle + 360;
				}
				break;
			case "[" :
				log.push({
					currentPoz:{x:currentState.currentPoz.x,
								y:currentState.currentPoz.y},
					theta:currentState.theta
				});
				break;
			case "]" :
				if(log.length>0){
					drawobj.stroke();
					currentState = log.pop();
				}
				break;
			default :
				drawobj.beginPath();
				drawobj.moveTo(currentState.currentPoz.x,currentState.currentPoz.y);
				drawobj.lineTo(currentState.currentPoz.x + len *Math.cos(Math.PI * currentState.theta / 180.0), currentState.currentPoz.y + len * Math.sin(Math.PI * currentState.theta / 180.0));
				currentState.currentPoz.x = currentState.currentPoz.x + len *Math.cos(Math.PI * currentState.theta / 180.0);
				currentState.currentPoz.y = currentState.currentPoz.y + len * Math.sin(Math.PI * currentState.theta / 180.0);
				drawobj.stroke();
				break;
		}
	}
	drawobj.stroke();
}