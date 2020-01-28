//  Austin Matel
// 	1/28/20
//  This is a comment
//  The setup function function is called once when your program begins
var boids = [];
boidNum = 10;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);


}

//  The draw function is called @ 30 fps
function draw() {

}
loadBoids(){
  for(var i = 0; i < boidnum; i++){
    boids[i] = new Boid();
  }
}
