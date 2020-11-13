var wall,thickness
var bullet,speed,weight
function setup() {
  createCanvas(1500,400);
  bullet=createSprite(10, 200, 50, 50);
  wall=createSprite(900,200,thickness,height/2);
  bullet.shapeColor="brown"
  wall.shapeColor="white"
  thickness=random(22,88)
  weight=random(30,52)
  speed=random(223,321)
  bullet.velocityX=speed
}

function draw() {
  background("black");  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0
   
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor="red"
    }
    
    if(damage<10){
      wall.shapeColor="green"
    }
    
    
  }
 
   
  drawSprites();
}
