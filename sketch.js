var seaImg;
var sea;
var shipImg1;
var ship;
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png" , "ship-2.png");
}

function setup(){
  createCanvas(400,400);
  sea =createSprite(300,100,200,400);
 sea.addImage(seaImg);
}

function draw() {
  background("blue");
 drawSprites();
}
