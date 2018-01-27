console.log("test")


var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

//create image
var Terrerian = new Image();
//set source
Terrerian.src = "Terraria_guy.png";

Terrerian.onload = function(){
	ctx.drawImage(Terrerian, 85,85,100,100);
}

var c2 = document.getElementById("myCanvas2");
var ctx2 = c2.getContext("2d");

//create image
var mario = new Image();
//set source
mario.src = "mario.png";

mario.onload = function(){
	ctx2.drawImage(mario, 85,85,100,100);
}

 var c3 = document.getElementById("myCanvas3");
 var ctx3 = c3.getContext("2d");

 ctx3.fillStyle = "cyan";

ctx3.fillRect(0,0,800,350);
ctx3.fillStyle = "green";
ctx3.fillRect(0,350,800,150);
ctx3.arc(700,65,50,0,6.28);
ctx3.fillStyle = "yellow";
ctx3.fill();

