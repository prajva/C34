const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground=new Ground(600,390,1200,20);

    box1 = new Box(700,320,70,70);
    box2 = new Box(770,320,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(770,240,70,70);
    box5 = new Box(700,320,70,70);
    box6 = new Box(770,320,70,70);
    box7 = new Box(700,240,70,70);
    box8 = new Box(770,240,70,70);
    ball1 = new Ball(500,240,30);
    sling1 = new SlingShot(ball1.body,{x:500,y:50})
    
   
}

function draw(){
   
    Engine.update(engine);
    //strokeWeight(4);
    background(0);
    box1.display();
    box2.display();
    ground.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    ball1.display();
    sling1.display();
}

function mouseDragged(){

    Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})


}


function keyPressed(){
    if(keyCode === 32){
       Matter.Body.setPosition(bird.body,{x:200,y:20});
       slingshot.attach(bird.body);
       gameState="onsling";
       bird.trajectory=[]
       
    
    }
}

