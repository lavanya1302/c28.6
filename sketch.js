var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}
var engine,world,ground,ball;
function setup() {
	createCanvas(800, 700);
    createSprite(400,200,50,50);
	

	engine update.Engine;
  
    var ground_options={
     
		isStatic:true
	
	
	}
    ground=Bodies.rectangle(200,390,200,20,ground_options);
	World.add(world,ground);

	}
	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	



function draw() {
  rectMode(CENTER);
  background(0);

  rect(ground.position.x,ground.position.y,400,20);
  paperball.display();
  dustbin.display();
  drawSprites();}
 



