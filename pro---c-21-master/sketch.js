
var boyImage,boyWalk,boyJump,boyDuck,backdropImg;
var walk,boy,jump,duck,backdrop;
function preload(){
boyImage = loadImage( "images/alienBeige.png");
boyWalk = loadImage("images/alienBeige_walk.png");
boyJump = loadImage("images/alienBeige_jump.png");
boyDuck = loadImage("images/alienBeige_duck.png");
backDropImg = loadImage("images/background.png");
}



function setup() {
  createCanvas(1600,400);

backdrop = createSprite(800,200,1600,400);
backdrop.addImage(backDropImg);


walk = createSprite(200,100,10,10);
walk.addImage(boyWalk);


  

}

function draw() {

  
  drawSprites();
}