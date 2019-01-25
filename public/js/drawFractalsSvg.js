let ns = 'http://www.w3.org/2000/svg'
// var div = document.getElementById('drawing') 
// var svg = document.createElementNS(ns, 'svg')
// svg.setAttributeNS(null, 'width', '100%')
// svg.setAttributeNS(null, 'height', '100%')
// div.appendChild(svg)
// var rect = document.createElementNS(ns, 'rect')
// rect.setAttributeNS(null, 'width', 100)
// rect.setAttributeNS(null, 'height', 100)
// rect.setAttributeNS(null, 'fill', '#f06')
// svg.appendChild(rect)
// var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
// newLine.setAttribute('id','line2');
//     newLine.setAttribute('x1','0');
//     newLine.setAttribute('y1','0');
//     newLine.setAttribute('x2','300');
//     newLine.setAttribute('y2','300');
//     newLine.setAttribute("stroke", "black")
//     svg.appendChild(newLine)
drawSvg("FF-[-F+F]+[+F-F]FFF-[-F+F]+[+F-F]F--[[--FF-[-F+F]+[+F-F]F++FF-[-F+F]+[+F-F]F]]",25);
function drawSvg(lsystem,angle){
	setUp(lsystem,angle);
};
function setUp(lsystem,angle){
	var div = document.getElementById('drawing');
	var svg = document.createElementNS(ns, 'svg');
	svg.setAttribute("viewBox", "0 0 500 500"); 
	svg.setAttributeNS(null, 'width', '100%')
	svg.setAttributeNS(null, 'height', '100%')
	div.appendChild(svg);
	parseLSystem(lsystem,svg,angle);
}

//drawing logic
function parseLSystem(lsystem,svg,angle){
	let start={x:50,y:50};
	console.log(lsystem);
	let currentState={
		currentPoz:{x: start.x,y:start.y},
		theta:270
	}
	let len=10;
	let log=[];
	var result=""
	for(let char in lsystem){
		switch(lsystem[char]){
			case "G" :
			currentState.currentPoz.x = currentState.currentPoz.x + len *Math.cos(Math.PI * currentState.theta / 180.0);
			currentState.currentPoz.y = currentState.currentPoz.y + len * Math.sin(Math.PI * currentState.theta / 180.0);
			result= result + " M "+currentState.currentPoz.x+","+currentState.currentPoz.y;
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
				currentState = log.pop();
			}
			var path = document.createElementNS('http://www.w3.org/2000/svg','path');
			path.setAttribute('d',"M "+currentState.currentPoz.x+","+currentState.currentPoz.y+" "+result);
			path.setAttribute("stroke", "black");
			svg.appendChild(path);
			result="";
			result= result + " M "+currentState.currentPoz.x+","+currentState.currentPoz.y;
			break;
			default :
			currentState.currentPoz.x = currentState.currentPoz.x + len *Math.cos(Math.PI * currentState.theta / 180.0);
			currentState.currentPoz.y = currentState.currentPoz.y + len *Math.cos(Math.PI * currentState.theta / 180.0);
			result= result + " L " + currentState.currentPoz.x + " , " + currentState.currentPoz.y;
			break;
		}
	}
	var path = document.createElementNS('http://www.w3.org/2000/svg','path');
	path.setAttribute('d',"M "+start.x+","+start.y+" "+result);
	path.setAttribute("stroke", "black");
	svg.appendChild(path);
}