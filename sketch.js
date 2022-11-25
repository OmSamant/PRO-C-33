const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world
var drops=[]
var rand
var maxDrops=100
var thunderCreatedFrame=0
var bgImg

function setup() {
  engine=Engine.create()
  world=engine.world
  createCanvas(800,400);
  bgImg=loadImage("snow2.jpg")
  
  if(frameCount%150===0){
    for(var i=0; i<maxDrops;i++){
      drops.push(new snowflake(random(0,800),random(0,400)))
    }
  }
}

function draw() {
  Engine.update(engine)
  background(bgImg);
  for(var i=0;i<maxDrops;i++){
    drops[i].showDrop()
    drops[i].updateY()
  }  
  drawSprites();
}