//  Austin Matel
// 	1/28/20
//  This is a comment
//  The setup function function is called once when your program begins
var boids = [];
var boidNum = 50;
var count = 0;
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadBoids();
}
//done
//  The draw function is called @ 30 fps
function draw(){
  frameRate(1);
  count++;
  frameRate(30);
  runBoids();
}
function loadBoids(){
  for(var i = 0; i < boidNum - boidNum/2; i++){
    boids[i] = new Boid(1);
  }
  for(var i = boidNum/2; i < boidNum; i++){
    boids[i] = new Boid(2);
  }
}
function runBoids(){
  for(var i = 0; i < boidNum; i++){
    boids[i].run();
  }
}
