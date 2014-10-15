var x0 = 125;
var y0 = 250;
var dx = 180;
var dy = 180;
$(document).ready(function(){
var c=document.getElementById("circle_canvas");
var ctx=c.getContext("2d");
ctx.strokeStyle = "#ff0000";
ctx.lineWidth = 10;
ctx.moveTo(x0,y0);
ctx.lineTo(x0+dx,y0+dy);
ctx.lineTo(x0+2*dx,y0);
ctx.lineTo(x0+4*dx,y0);
ctx.lineTo(x0+3*dx,y0+dy);

ctx.stroke();
});

