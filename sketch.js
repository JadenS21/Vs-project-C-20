var car1,car1,car3,car4;
var wall1,wall2,wall3,wall4;
var speed,weight;

function setup() {
  createCanvas(1600,500);
 
  wall1=createSprite(1500,100,20,60)
  wall1.shapeColor="grey"
  car1=createSprite(50,100,20,20)
  car1.shapeColor="white"
 
  wall2=createSprite(1500,200,20,60)
  wall2.shapeColor="grey"
  car2=createSprite(50,200,20,20)
  car2.shapeColor="white"
  
  wall3=createSprite(1500,300,20,60)
  wall3.shapeColor="grey"
  car3=createSprite(50,300,20,20)
  car3.shapeColor="white"
  
  wall4=createSprite(1500,300,20,60)
  wall4.shapeColor="grey"
  car4=createSprite(50,300,20,20)
  car4.shapeColor="white"
 
  speed=random(55,90);
  weight=random(400,1500);
  
}

function draw() {
  background(0);  
  
  car1.velocityX=speed;
  car2.velocityX=speed;
  car3.velocityX=speed;
  car4.velocityX=speed;
  
  if(wall1.x-car1.x < (car1.width + wall1.width)/2)
{
  car1.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509

  if(deformation>180)
   {
  car1.shapeColor=color(255,0,0)
   }
  if(deformation<180 && deformation>100)
   {
  car1.shapeColor=color(230,230,0)
   }
  if(deformation<100)
   {
  car1.shapeColor=color(0,255,0)
   }
} 
  
  
  if(wall2.x-car2.x < (car2.width + wall2.width)/2)
{
  car2.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509
  
  if(deformation>180)
   {
  car2.shapeColor=color(255,0,0)
   }
  if(deformation<180 && deformation>100)
   {
  car2.shapeColor=color(230,230,0)
   }
  if(deformation<100)
   {
  car2.shapeColor=color(0,255,0)
   }
}   
  
  
  if(wall3.x-car3.x < (car3.width + wall3.width)/2)
{
  car3.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509

  if(deformation>180)
   {
  car3.shapeColor=color(255,0,0)
   }
  if(deformation<180 && deformation>100)
   {
  car3.shapeColor=color(230,230,0)
   }
  if(deformation<100)
   {
  car3.shapeColor=color(0,255,0)
   }
} 


 if(wall4.x-car4.x < (car4.width + wall4.width)/2)
{
  car4.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22509

  if(deformation>180)
   {
  car4.shapeColor=color(255,0,0)
   }
  if(deformation<180 && deformation>100)
   {
  car4.shapeColor=color(230,230,0)
   }
  if(deformation<100)
   {
  car4.shapeColor=color(0,255,0)
   }
} 
  
 
  
  drawSprites();
}