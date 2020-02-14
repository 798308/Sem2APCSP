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
    ellipse(this.x, this.y, 10, 10);
  }
}
