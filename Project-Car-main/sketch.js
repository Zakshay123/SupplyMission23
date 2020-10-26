function setup() {                                                                               
  createCanvas(1600,400);
  pack=createSprite(800, 100, 50, 50);
  floor=createSprite(800,400,2000,20);
  wall1=createSprite(800,380,200,20);
  wall2=createSprite(700,340,20,100);
  wall3=createSprite(900,340,20,100);
  floor.shapeColor = "yellow"
  pack.shapeColor = "white"
  wall1.shapeColor = "red"
  wall2.shapeColor = "red"
  wall3.shapeColor = "red"

}

function draw() {
  background("black");  
  pack.collide(wall1)
if (keyDown("down_arrow")){
   pack.y = pack.y + 20
}
  drawSprites();
}