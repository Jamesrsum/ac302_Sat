var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

ctx.beginPath();
ctx.moveTo(150,30);
ctx.lineTo(250,150);
ctx.lineTo(50,150);
ctx.closePath();
ctx.strokeStyle="rgb(38, 255, 5)"
ctx.stroke();
ctx.fillStyle="rgb(38, 255, 5)"
ctx.fill()

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

ctx2.beginPath();
ctx2.moveTo(0,0);
ctx2.lineTo(300,300);
ctx2.lineTo(300,0);
ctx2.lineTo(0,300)
ctx2.closePath();
ctx2.strokeStyle="rgb(0, 0, 0)"
ctx2.stroke();
ctx2.fillStyle="rgb(255, 5, 5)"
ctx2.fill()