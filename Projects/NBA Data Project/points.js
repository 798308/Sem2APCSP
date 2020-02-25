class Point{
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  run(){
    this.render();
  }
  render(){
    fill(255,100,100);
    ellipse(this.x, this.y, 5, 5);
    fill(5,5,5);
    textSize(10);
    textStyle(NORMAL);
    text("(" + str(((this.x ) + 200) / 20) + ", " + str((this.y + 800) / 2500) + ")", this.x + 10, this.y + 10);
  }
}
