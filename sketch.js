//Global Variables
var sprite,image1;
var button;

function preload(){
   image1 = loadImage("image.jpg");
}

function setup(){
    createCanvas(400, 400);
    button = createSprite(200, 200, 50, 50);
    button.shapeColor = "red";
    button.depth = 5;

    sprite = createSprite(200, 200,400, 400);
    sprite.shapeColor = "white"
    sprite.depth = 1;
    sprite.scale = 4;
    sprite.addImage("photo", image1);
    sprite.visible = false;
}

function draw(){
  background(180);
    if(mousePressedOver(button)){
        button.visible = false;
        sprite.visible = true;
    }
  drawSprites();
}
