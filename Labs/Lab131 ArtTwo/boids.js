// Austin Matel
//1/28/20
class Boid{
  constructor(id){
    this.id = id;
    this.loc = createVector(random(0,800), 400);
    this.vel = createVector(random(1,8),random(1,8));
    this.acc = createVector(0,0);
    this.clr = color(random(0,255),random(0,255),random(0,255), random(0,40));
  }
  run(){
    this.render();
    this.update();
    this.checkEdges();
  }
  render(){
    if(count < 500){
      for(var i = 0; i < boids.length; i++){
        var disToBoids = this.loc.dist(boids[i].loc);
        if (disToBoids > 100){
          stroke(this.clr);
          strokeWeight(random(0,5));
          if(count % 5 === 0){
            if(this.id === 1 && boids[i].id === 2){
              line(this.loc.x, this.loc.y, boids[i].loc.x, boids[i].loc.y);
            }
          }
        }
      }
    }
  }
  update(){
    if(count < 500){
      if(this.id === 1){
        this.vel.add(this.acc);
        this.loc.add(this.vel);
      }
      if(this.id === 2){
        this.vel.y = 0;
        this.vel.add(this.acc);
        this.loc.add(this.vel);
      }
    }
  }
  checkEdges(){
    if(this.loc.x > 800){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.x < 0){
      this.vel.x = -this.vel.x;
    }
    if(this.loc.y < 0){
      this.vel.y = -this.vel.y;
    }
    if(this.loc.y > 800){
      this.vel.y = -this.vel.y;
    }
  }
}
