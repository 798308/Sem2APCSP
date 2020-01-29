// Austin Matel
//1/28/20
class Boid{
  constructor(){
    this.loc = createVector(random(0,800), random(0,800));
    this.vel = createVector(-8,8);
    this.acc = createVector(0,0);
    this.clr = color(random(0,255),random(0,255),random(0,255));
  }
  run(){
    this.render();
    this.update();
    this.checkEdges();
  }
  render(){
    for(var i = 0; i < boids.length; i++){
      var disToBoids = this.loc.dist(boids[i]);
      if (disToBoids < 100){
        fill(this.clr);
        line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
        console.log("ok");
      }
    }
  }
  update(){
    this.vel.add(this.acc);
    this.loc.add(this.vel);
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
    if(this.loc.y > 800){
      this.vel.y = -this.vel.y;
    }
  }
}
