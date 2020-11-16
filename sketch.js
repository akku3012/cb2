
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,dustbin;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(400,490,800,10);
	
	dustbin=new Dustbin(650,480,100,10);
	World.add(world,dustbin);

	dustbinL=createSprite(600,440,10,80);

	 dustbinR=createSprite(700,440,10,80);

	 paper=new CrumbledPaper(100,470,15);
	 World.add(world,paper);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);

  Engine.update(engine)
  
  drawSprites();
  dustbin.display();
//   dustbinL.display();
//   dustbinR.display();
  paper.display();
  ground.display();
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:60,y:-60});
	}
}



