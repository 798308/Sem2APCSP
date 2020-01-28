// Austin Matel
//1/28/20
class Boid{
  constructor(){
    this.loc = createVector(random(0,800), random(0,800));
    this.vel = createVector(-8,8);
    this.acc = createVector(-0.001, 0.001);
    this.clr = color(random(0,255),random(0,255),random(0,255));
  }
  run(){

  }
  render(){

  }
  update(){

  }
  checkEdges(){
    if(this.loc.x > 800){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y > 800){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
  }
}
