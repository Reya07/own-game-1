var player, playerImg;
var enemy, enemyImg;
var stars, starsImg;
var rocks, rocksImg;


function preload() {

playerImg = loadImage("player spaceship.gif");
enemyImg = loadImage("enemy spaceship.gif");

}




function setup() 
{ 
  createCanvas(400,400);

  player = createSprite(300, 100, 25, 25);
  player.addImage(playerImg);
  player.scale = 0.5;

  enemy = createSprite(100, 120, 25, 25);
  enemy.addImage(enemyImg);
  enemy.scale = 0.5;
}

function draw() 
{
background(51);

player.x = mouseX;
player.y = mouseY;



drawSprites();

}

