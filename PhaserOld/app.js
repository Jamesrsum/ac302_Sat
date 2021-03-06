var game = new Phaser.Game(800,600,Phaser.AUTO,'',
	{preload:preload,create: create, update:update});


var score = 0;
var life = 3;

function preload(){
game.load.image('sky','assets/sky.png');
game.load.image('ground','assets/platform.png')
game.load.spritesheet('dude','assets/dude.png',32,48)
game.load.spritesheet('baddie','assets/baddie.png',32,48)
}

function create(){
game.physics.startSystem (Phaser.Physics.ARCADE);

//create sky
game.add.sprite(0,0, 'sky');

//create group of platforms
platforms = game.add.physicsGroup();
game.enableBody = true;

//create ground
var ground = platforms.create(0,550,'ground');
ground.scale.setTo(2,2);
ground.body.immovable = true;

//create ledges
var ledge = platforms.create(400,400,'ground');
ledge.body.immovable = true;
ledge = platforms.create(-100,250,'ground');
ledge.body.immovable = true;

//set text style
var style = {font: "bold 32px Arial",fill, "#fff"};
var style2 = {font: "bold 32px Arial",fill, "#028a1a"};

//position score
scorelabel = game.add.text(300,560, "Score:", style);
scorenumber = game.add.text(420,560,score,style);
scorelabel = .setShadow(3,3 'rgba()0,0,0,0.5',2);
scorelabel = .setShadow(3,3 'rgba()0,0,0,0.5',2);
}

//position lives 

lifelabel = game.add.text(10,5, "Score:", style);
lifenumber = game.add.text(120,5,score,style);
lifelabel = .setShadow(3,3 'rgba()0,0,0,0.5',2);
lifelabel = .setShadow(3,3 'rgba()0,0,0,0.5',2);

//create the player sprite
player = game.add.sprite(32, 400, 'dude');
//animation
player.animations.add('left',[0,1,2,3], 10, true);
player.animations.add('right',[5,6,7,8], 10, true);
game.physics.arcade.enable(player);
player.body.bounce.y = 0.2;
player.body.gravity.y = 300;
player.body.collideWorldBounds = true;

//enemy
enemy1 = game.add.sprite(760,20, 'baddie')

//animation
enemy1.animations.add('left',[0,1], 10, true);
enemy1.animations.add('right',[2,3], 10, true);
game.physics.arcade.enable(enemy1);
enemy1.body.bounce.y = 0.2;
enemy1.body.gravity.y = 300;
enemy1.body.collideWorldBounds = true;


//stars
stars = game,add,physicsGroup();
star.enableBody = true;
for(var i = 0; i < 12; i++){
	var star = stars.create(i*70, 0, 'star');
	star.body.gravity.y = 200;
star.body.bounce.y = 0.7 + Math.random()*0.2;
}
cursors = game.input.keyboard.createCursorKeys();

}

function update(){
game.physics.arcade.collide(player, platforms);
game.physics.arcade.collide(enemy1, platforms);
game.physics.arcade.collide(stars, platforms);

//player still no events 
player.body.velocity.x = 0;

if(cursors.left.isDown){
	player.animations.player('left');
	player.body.velocity.x = -150;
}
 else if(cursors.right.isDown){
	player.animations.player('right');
	player.body.velocity.x = 150;
}else{

	player.animation.stop();
	player.frame = 4;
}
//jump if touching the ground/platform
if(cursor.up.isDown && player.bodytouching.down){
	player.body.velocity.y = -300;
}
}

