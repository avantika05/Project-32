const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, stand;
var polygon, slingShot;
var score = 0;

function preload() {
    polygon_img=loadImage("polygon.png");
}

function setup() {
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground();
    stand = new Stand(390,300,250,10);

    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);

    box5 = new Box(315,315,30,40);
    box6 = new Box(345,315,30,40);
    box7 = new Box(375,315,30,40);

    box8 = new Box(330,355,30,40);
    box9 = new Box(360,355,30,40);

    box10 = new Box(345,395,30,40);

    polygon = Bodies.cirlce(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon,{x:100, y:200});

}

function draw() {
background(56,44,44);
text("SCORE: " + score, 750,40);

box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();

ground.display();
stand.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();

fill("gold");
imageMode(CENTER)
image(polygon_img ,ball.position.x,ball.position.y,40,40);

slingShot.display();

}

function mouseDragged(){
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32) {
        slingShot.attach(this.polygon);
    }
}

async function getBackgroundImage(){
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    var responseJSON = await response.json();

    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);

    if(hour>=06 && hour<=18) {
        background("light yellow");
    }
    else{
        background("dark blue");
    }

     console.log(responseJSON);
}