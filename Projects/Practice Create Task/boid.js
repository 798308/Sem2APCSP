//Austin Matel
//8/21/19
class Boid{
  constructor(x, y){
    this.loc = createVector(x, y);
  }

  run(){
    this.checkEdges();
    this.followMouse();
  }

  checkEdges(){
    if (this.loc.x < 0){
      this.vel.x = -(this.vel.x);
    }
    if (this.loc.x > width){
      this.vel.x = -(this.vel.x);
    }
    if (this.loc.y < 0){
      this.vel.y = -(this.vel.y);
    }
    if (this.loc.y > height){
        this.vel.y = -(this.vel.y);
    }
  }
  followMouse(){
    this.loc.x = mouseX;
    this.loc.y = mouseY;
  }
}
