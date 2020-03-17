class Attacker{
  constructor(x,y){
    this.clr = clr;
    this.loc = createVector(x,y);
    this.vel = createVector(0, 0);
  }
  run(){
    this.render();
    this.update();
    this.checkEdges();
  }
  render(){
    fill(255,255,255);
    rect(this.loc.x, this.loc.y, cubeWidth, cubeWidth);
  }
  update(){
    if(num === 1){
      this.vel.y = 0;
      this.vel.x = cubeWidth;
    }
    if(num === 2){
      this.vel.y = 0;
      this.vel.x = -cubeWidth;
    }
    if(num === 3){
      this.vel.x = 0;
      this.vel.y = -cubeWidth;
    }
    if(num === 4){
        this.vel.x = 0;
        this.vel.y = cubeWidth;
    }
    this.loc.add(this.vel);
  }
  checkEdges(){//makes you lose when the snake head hits the edges
    if(this.loc.x > width - cubeWidth || (this.loc.x < 0) || (this.loc.y > height - cubeWidth) || (this.loc.y < 0)){
      this.loc.x = random(800);
      this.loc.y = random(800);
    }
  }
}
