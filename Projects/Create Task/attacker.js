class Attacker{
  constructor(x,y,dx,dy){
    this.clr = color(255,255,255);
    this.loc = createVector(x,y);
    this.vel = createVector(dx, dy);
  }
  run(){
    this.render();
    this.update();
    this.checkEdges();
    this.touchingSnake();
  }
  render(){
    fill(255,255,255);
    rect(this.loc.x, this.loc.y, cubeWidth, cubeWidth);
  }
  update(){
    this.loc.add(this.vel);
  }
  checkEdges(){
    if((this.loc.x > width - cubeWidth) || (this.loc.x < 0)){
      this.vel.x = -this.vel.x;
    }
    if((this.loc.y > height - cubeWidth) || (this.loc.y < 0)){
      this.vel.y = -this.vel.y;
    }
  }
  touchingSnake(){
    if(snake.loc.x + cubeWidth > this.loc.x && snake.loc.y + cubeWidth > this.loc.y && snake.loc.x < this.loc.x + cubeWidth && snake.loc.y < this.loc.y + cubeWidth){
      gameState = 3;
    }
  }
}
