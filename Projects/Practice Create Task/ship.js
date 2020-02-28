//Austin Matel
//2/25/20
class Ship{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(int(random(225)), int(random(225)), int(random(225)));
    this.angle = 0;
    this.acc = createVector(0,0.1);
  }
  // runs all of the ship code
run(){
  this.checkEdges();
  this.update();
  this.render();
  this.makeLine();
  this.touchingMouse();
}
  //creates the lines between squares and triangles
makeLine(){
  for(var i = 0; i < squares.length; i++){
    if(this.loc.dist(squares[i].loc) < 75){
      stroke(random(255), random(255), random(255), random(255));
      line(this.loc.x, this.loc.y, squares[i].loc.x, squares[i].loc.y);
      noStroke();
    }
  }
}
  //makes the ship warp to the other side of the screen when it contacts the side
checkEdges(){
  if(this.loc.x < 0){
    this.loc.x = width;
  }
  if(this.loc.x > width){
    this.loc.x = 0;
  }
  if(this.loc.y < 0){
    this.loc.y = height;
  }
  if(this.loc.y > height){
      this.loc.y = 0;
  }
}
  //makes the ships attracted or repelled from the mouse and makes it move
  update(){
  var disToAttractor;
  var disToRepellor;
  disToAttractor = this.loc.dist(attractor.loc);
  disToRepellor = this.loc.dist(repellor.loc);
      if(disToAttractor > 200){
    this.acc = p5.Vector.sub(attractor.loc, this.loc);
    this.acc.normalize();
    this.acc.mult(0.1);
  }
  if(disToRepellor < 200){
    this.acc = p5.Vector.sub(repellor.loc, this.loc);
    this.acc.normalize();
    this.acc.mult(-0.5);
    }
  this.vel.limit(4);
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  }
    //this draws the ships and orients the ship to point towards the mouse
render(){
  fill(this.clr);
  this.angle = this.vel.heading() + 360;
  this.angle = this.angle +0.1;
  push();
    translate(this.loc.x,this.loc.y);
    rotate(this.angle);
    triangle(-5,8,5,8,0,-8);
  pop();
  }
  touchingMouse(){
    if(this.loc.x === mouseX && this.loc.y === mouseY){
            background(random(255), random(255), random(255), random(255));
    }
  }
}
