var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var WIDTH = 600;
var HEIGHT = 400;

var x,y; //coordinates x and y of the ball
var mx,my; //movement in x and y directions for th ball

function init(){
//Initialize the ball's properties
x = 300;
y =200;
mx = 3;
my = 4;
setInterval(update,10);
}
//initialization of the animation - kick startv the updates 
function drawCircle(x,y,r){
	//	Draw circle at the point (x,y) with radius r from radian 0 to 6.28
	ctx.beginPath();
	ctx.arc(x,y,r, 0,6.28);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "pink";
	ctx.fill();
}

//draw circle on the screen
function update(){
	clear();
	drawCircle(x,y,30);
	//bouncing off the edges
	// checks if the ball goes off the screen from right / left
	// if so, the ball moves in opposite x-direction (e.g. right to left / vice versa)
	if(x+mx> WIDTH || x+mx < 0){
		mx=-mx;
	}
	// check if the ball goes off the screen from top / bottom
	// if so, the ball moves in opposite y-direction (e.g. top to bottom / vice versa)
	if(y+my> HEIGHT || y+my < 0){
		my=-my;
	}

	// Moving the ball's x and y position
	x+=mx;
	y+=my;

}

//update the position of the ball and draw the ball at that position
function clear(){
ctx.clearRect(0,0, WIDTH, HEIGHT);
}

init();