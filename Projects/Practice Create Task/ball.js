//Austin Matel
//2/25/20
class Ball{
  constructor(x, y, dx, dy){
    this.loc = createVector(x, y);
    this.vel = createVector(dx, dy);
    this.clr = color(0, random(255), 0);
    this.angle = 0;
    this.acc = createVector(0,0.1);
  }
  // This runs all of the square code
  run(){
    this.checkEdges();
    this.update();
    this.render();
  }
  // This makse the squares warp to the other side of the screen when they contact the side of the canvas
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
  // This attracts ad repels the ssquares to the mouse and give it its speed
  update(){
    var disToAttractor;
    var disToRepellor;
    disToAttractor = this.loc.dist(attractor.loc);
    disToRepellor = this.loc.dist(repellor.loc);
    if(disToRepellor > 200){
      this.acc = p5.Vector.sub(repellor.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(0.1);
      }
    if(disToAttractor < 200){
      this.acc = p5.Vector.sub(attractor.loc, this.loc);
      this.acc.normalize();
      this.acc.mult(-0.5);
      }
    this.vel.limit(4);
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    }
  // This displays the squares and orients them to face a flat side towards the mouse
  render(){
    fill(this.clr);
    ellipse(this.loc.x, this.loc.y, 10, 10);
    }
  }
