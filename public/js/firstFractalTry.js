window.onload = setup;
var canvas,drawobj;
function setup()
{
	canvas=document.getElementById("thecanvas");
	drawobj = canvas.getContext("2d");
	drawobj.translate(0.5, 0.5);
	cantor(canvas.width/2,canvas.height/2,500,0);
}
function cantor(x, y,len,flag){
	if(len>=1){
		if(flag==0){
			drawline(x,y,x+len,y);
			drawline(x,y,x-len,y);
			cantor(x+len,y,len*0.67,1);
			cantor(x-len,y,len*0.67,1);
		}
		else{
			drawline(x,y,x,y+len);
			drawline(x,y,x,y-len);
			cantor(x,y+len,len*0.67,0);
			cantor(x,y-len,len*0.67,0);
		}
	}
}
function drawline(x,y,x2,y2){
	drawobj.beginPath();
	drawobj.moveTo(x,y);
	drawobj.lineTo(x2,y2);
	drawobj.stroke();
}