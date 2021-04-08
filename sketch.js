
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
const Body = Matter.Body;
var ground
var paperball
var trashcan
var trashcan1 
var trashcan2
var trashcanimage
var paperimage
var trashcanimageimage
var paperballimageimage
var slingshot
var trashcan

function preload()
{
  trashcanimage = loadImage("trashcan.png")
  paperimage = loadImage("paperball.png")
}
function setup(){
	//Create the Bodies Here.
  createCanvas(1200,500);
  engine = Engine.create()
  world = engine.world
  ground = new Ground(600,height, 1400, 20)
  paperball = new Ball(300,300,20)
  trashcan = new Ground(700,400,100,10)
  trashcan1 = new Ground(750,350,10,100)
  trashcan2 = new Ground(650,350,10,100)
  slingshot = new SlingShot(paperball.body, {x:100,y:100})
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background("white");
  drawSprites();
  ground.display()
  paperball.display()
  slingshot.display()
  imageMode(CENTER)
  image(trashcanimage,700, 350, 110, 110)
}
 
function keyPressed() { 
	if(keyCode === UP_ARROW) {
       Matter.Body.applyForce(paperball.body,paperball.body.position,{x:30,y:-85})
	}
}

function mouseDragged() {
  Matter.Body.setPosition(paperball.body, {x: mouseX , y: mouseY});
}


function mouseReleased() {
  slingshot.fly();
}

