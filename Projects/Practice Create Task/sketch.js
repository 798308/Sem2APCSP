//  Austin Matel
// 2/25/20
//  This is a comment
//  The setup function function is called once when your program begins
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
function loadObjects(n){
  for (var i = 0; i < n; i++){
    ships[i] = new Ship(random(width), random(height), random(-3,3), random(-3,3), 1);
    squares[i] = new Square(random(width), random(height), random(-3, 3), random(-3,3), 1);
  }
  repellor = new Ball(width/2, height/2, random(-0.5,0.5), random(-2,2), 0);
  attractor = new Ball(width/2, height/2, random(-0.5,0.5), random(-2,2), 0);
}
function runObjects(){
  for(var i = 0; i < ships.length; i++){
    ships[i].run();
    squares[i].run();
  }
  repellor.run();
  attractor.run();
}
