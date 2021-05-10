var car, wall, speed , weight;

function setup(){
  createCanvas(1600,400);
  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  car.shapeColor = ("teal");
  car.velocityX = speed;

  wall = createSprite(1500, 200, 30, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw(){
  background("turquoise");
  


combine(wall, car);
  
  drawSprites();
}










