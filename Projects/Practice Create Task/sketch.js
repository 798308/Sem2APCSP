//  Austin Matel
// 2/25/20
//  This is a comment
//  The setup function function is called once when your program begins
//  Make sure to start with the mouse on the canvas, press control r to start
var ships = [];
var squares = [];
var repellor,attractor;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  loadObjects(100);
}

//  The draw function is called @  30 fps
function draw() {
  background(5,5,5,20);
  runObjects();
}
// This puts the ships, boids, and squares into their lists and variables, and gives them their attributes
function loadObjects(n){
  for (var i = 0; i < n; i++){
    ships[i] = new Ship(random(width), random(height), random(-3,3), random(-3,3));
    squares[i] = new Square(random(width), random(height), random(-3, 3), random(-3,3));
  }
  repellor = new Boid(width/2, height/2);
  attractor = new Boid(width/2, height/2);
}
// When called, this displays the ships, boids, and squares and makes them move around
function runObjects(){
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
    squares[i].run();
  }
  repellor.run();
  attractor.run();
}
