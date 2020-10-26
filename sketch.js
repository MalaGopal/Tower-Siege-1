const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,stand1,stand2,slingshot;
var box1,polygon,polygonImg;

function setup() {
  createCanvas(800,1000);
engine = Engine.create();
world = engine.world;

ball = Bodies.circle(100,200,20);
World.add(world,ball);

ground = new Ground(400,590,800,10);
stand1 = new Ground(500,500,300,10)

box1 = new Box(500,200,40,40);
box2 = new Box(460,200,40,40);
box3 = new Box(420,200,40,40);
box4 = new Box(540,200,40,40);
box5 = new Box(580,200,40,40);
box6 = new Box(500,200,40,40);
box7 = new Box(460,200,40,40);
box8 = new Box(540,200,40,40);
box9 = new Box(500,200,40,40);



slingshot = new SlingShot(ball,{x:50,y:550})



}

function draw() {
  background(255,0,255);
  Engine.update(engine);

  
  fill("yellow");
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,40);
  ground.display();
  stand1.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  slingshot.display()
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(ball,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(ball);
  }
}