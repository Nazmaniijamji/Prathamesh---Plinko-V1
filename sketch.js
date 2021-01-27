const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var divisionHeight = 300;

var borderLeft, borderRight, borderUp, borderDown;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
  createCanvas(400,600);

  engine = Engine.create();
  world = engine.world;

  borderUp = createSprite(200,5,400,10);
  borderUp.shapeColor = "red";

  borderDown = createSprite(200,595,400,10);
  borderDown.shapeColor = "red";

  borderLeft = createSprite(5,300,10,600);
  borderLeft.shapeColor = "red";

  borderRight = createSprite(395,300,10,600);
  borderRight.shapeColor = "red";

  ground1 = new Ground(200,585,400,10);

  //new Division(k, height-divisionHeight/2, 10, divisionHeight)

  for(var k = 0; k<=width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
  }

}

function draw() {
  background(0,0,0);  

  canvas.style = "position:absolute; left: 50%; width: 400px; margin-left: -200px;";

  Engine.update(engine);

  ground1.display();
  for (var k = 0; k < divisions.length; k++) {
     
    divisions[k].display();
  }
  drawSprites();

  //division1.display();
  

}