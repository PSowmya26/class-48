
var ground, groundImg;
var suga,suga_Img, sugaGroup;
var which;
var score;
var sound;
var gameState="start";
var ground,ground1Img;

function preload(){
 blue_Img = loadImage("images/blue.jpg");
 suga_Img = loadImage("images/suga.png");
 groundImg = loadImage("images/bg.jpg");
 ground1Img=loadImage("images/bts.jpg")
 sound = loadSound("sound.mp3");
 
}

function setup(){
  createCanvas(700,600);
  sound.loop();
  ground1=createSprite(250,300,1000,600);
  ground1.addImage(ground1Img);
  

  ground = createSprite(0,0,500,500);
  ground.addImage(groundImg);
  ground.scale = 7;
  ground.velocityY = 6;

  sugaGroup = new Group();
  score=0;
}
function draw() {
  background(255);

  if(gameState==="start"){
    background(ground1Img)
    if(mousePressedOver(ground1)){
      gameState="play"
    }
  }
  else if(gameState==="play"){
  ground1.visible=false;
  
  if(ground.y>500){
    ground.y = ground.height/2;
  }
  
  if (mousePressedOver(suga)) 
  {
   suga.changeImage("blue1");
   suga.scale=0.5;

  }
  spawnTiles();
  drawSprites();
}
 
}


function spawnTiles(){
  if(frameCount%150===0){
  which=Math.round(random(1,2));
  suga = createSprite(random(100,600), 0);
  suga.velocityY=15;
  suga.addImage("suga1",suga_Img);
  suga.addImage("blue1",blue_Img);
  suga.scale=0.1;
  suga.lifetime = 600;
  sugaGroup.add(suga);
  
  } 
}
