var fRect,mRect


function setup() {
  createCanvas(800,400);
  fRect=createSprite(400, 200, 50, 50);
  fRect.shapeColor="aqua"
  fRect.debug=true
  mRect=createSprite(500, 200, 50, 50);
  mRect.shapeColor="maroon"
  mRect.debug=true
}

function draw() {
  background(255,0,255);  
mRect.y=World.mouseY
mRect.x=World.mouseX
if(mRect.x-fRect.x<fRect.width/2+mRect.width/2
  && mRect.y-fRect.y<fRect.height/2+mRect.height/2
  &&fRect.y-mRect.y<fRect.height/2+mRect.height/2
  &&fRect.x-mRect.x<fRect.width/2+mRect.width/2){

fRect.shapeColor="green"
mRect.shapeColor="green"
  }
  else{
    fRect.shapeColor="aqua"
    mRect.shapeColor="maroon"
  }
  drawSprites();
}