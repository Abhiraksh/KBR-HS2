
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = 0, introKBR, introKBR_img, grass, grassi, grass2;
var logo, logoi, vine, vinei, oa, oai;  
var btn1, btn2, b1i, b2i, turtle1, t1i, fish, fi;
var star, si;

function preload()
{
	introKBR_img = loadImage("images/KBR.png");
	grassi = loadImage("images/grass.png");
	logoi = loadImage("images/yuva.png");
	vinei = loadImage("images/vines.png");
	oai = loadImage("title.png");
	b1i = loadImage("images/start.png");
	b2i = loadImage("images/controls.png");
	t1i = loadImage("images/turtle.png");
	fi = loadImage("images/fishes.png");
	si = loadImage("images/starfish.png");
}

function setup() {
	createCanvas(window.innerWidth, window.innerHeight);


	engine = Engine.create();
	world = engine.world;

	
     

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  if(gameState === 0){
  homeScreen();
  }

  drawSprites();
 
}

function homeScreen(){
	
	background("cyan");

	if(gameState===0){

	introKBR = createSprite(100,50,10,10);
	introKBR.addImage(introKBR_img);
	introKBR.scale = 0.7;

	grass = createSprite(100,600,10,10);
	grass.addImage(grassi);
	//grass.scale = 0.7;

	grass2 = createSprite(1220,600,10,10);
	grass2.addImage(grassi);

	// vine = createSprite(650,160,10,10);
	// vine.addImage(vinei);
	// vine.scale = 0.7;

	logo = createSprite(1220,50,10,10);
	logo.addImage(logoi);
    logo.scale = 0.9;

    oa = createSprite(650,200,10,10);
	oa.addImage(oai);

	btn1 = createSprite(650,400,10,10);
	btn1.addImage(b1i);
	btn1.scale = 0.5;

	btn2 = createSprite(650,500,10,10);
	btn2.addImage(b2i);
	btn2.scale = 0.5;

	turtle1 = createSprite(400,500,10,10);
	turtle1.addImage(t1i);

	fish = createSprite(1100,300,10,10);
	fish.addImage(fi);
	fish.scale = 0.7;

	star = createSprite(100,300,10,10);
	star.addImage(si);
    star.scale = 0.7;
	}
	
	
	}
	


