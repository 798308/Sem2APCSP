//Ausstin Matel
//10/31/19
class Food{
  constructor(x,y){
    this.loc = createVector(x,y);
    this.clr = color(255,0,0);
    this.w = cubeWidth;
  }
  run(){
    this.render();
    this.touchingSnake();
  }
  render(){//shows the red food
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.w);
  }
  touchingSnake(){
    if(snake.loc.x === this.loc.x && snake.loc.y === this.loc.y){//puts the food in a random place

      this.loc.x = cubeWidth * int(random(0,800/cubeWidth));
      this.loc.y = cubeWidth * int(random(0,800/cubeWidth));
      for(var i = 0; i < snake.body.length; i++){
        if(this.loc.x === snake.body[i].x){
          this.loc.x = cubeWidth * int(random(0,800/cubeWidth));
        }
        if(this.loc.y === snake.body[i].y){
          this.loc.y = cubeWidth * int(random(0,800/cubeWidth));
        }
      }
      score = score + 1;
    }
  }
}
