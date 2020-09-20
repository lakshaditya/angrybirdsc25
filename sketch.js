const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground1,box2;
var pig1,pig2;
var log1,log2,log3,log4,box3,box4;
var box5,bird,backgroundimg;
function preload(){
    backgroundimg = loadImage("sprites/bg.png")
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
ground1 = new ground(600,390,1200,20);
    box1 = new Box(800,320,70,70);
    box2 = new Box(900,320,70,70);
    pig1 = new pig(850,340);
    log1 = new log(850,270,280,PI/2)
    box3 = new Box(800,250,70,70);
    box4 = new Box(900,250,70,70);
    pig2 = new pig(850,260);
    log2 = new log(850,220,280,PI/2)
box5 = new Box (850,200,70,70);
bird = new Bird (200,300);
log3 = new log (800,200,150,PI/7);
log4 = new log (900,200,150,-PI/7);

}

function draw(){
    background(backgroundimg); 
       Engine.update(engine);
    box1.display();
   ground1.display();
   box2.display();
    pig1.display();
    log1.display();
    box3.display();
    pig2.display();
    log2.display();
box4.display();
box5.display();
bird.display();
log3.display();
log4.display();

}