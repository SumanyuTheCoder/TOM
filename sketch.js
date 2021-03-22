 const World= Matter.World;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;

var engine, world;
var cat,catImage;
var mouse,mouseImage
function preload() {
    //load the images here
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    //create new object of class Cat and Mouse
    cat = new Tom(200,200,50,50)
// mam please see the tom class is there any mistake
}

function draw() {

    background(255);
    
//Write condition here to evalute if tom and jerry collide
    Engine.update(engine);

//we need to update the changes everytime we make some changes  this was in the angrybird code

   //still not working?
   //ya mam
   //what error a


cat.display();
    
    

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
