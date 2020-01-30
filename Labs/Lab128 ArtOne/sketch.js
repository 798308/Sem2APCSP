//  Austin Matel
// 	1/28/20
//  This is a comment
//  The setup function function is called once when your program begins
var boids = [];
var boidNum = 10;
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadBoids(boidNum);
}

//  The draw function is called @ 30 fps
function draw(){
  background(5,5,5);
  runBoids();
}
function loadBoids(){
  for(var i = 0; i < boidNum; i++){
    boids[i] = new Boid();
  }
}
function runBoids(){
  for(var i = 0; i < boidNum; i++){
    boids[i].run();
  }
}
