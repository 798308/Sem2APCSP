//Austin Matel
//8/21/19
//creating parameters
class Button{
  constructor(x, y, w, h, msg, clr){
    this.loc = createVector(x,y);
    this.h = h;
    this.w = w;
    this.msg = msg;
    this.clr = clr;
  }
  //actually creating buttons
  run(){
    this.render();
    this.isPressed();
  }
  //drawing buttons
  render(){
    fill(this.clr);
    rect(this.loc.x, this.loc.y, this.w, this.h, 20);
    fill(10);
    textSize(30);
    text(this.msg, 365, 655);
  }
  //checks if the button is pressed and makes different buttons do different things
  isPressed(){
    if (mouseX > this.loc.x && mouseX < this.loc.x + this.w && mouseY > this.loc.y && mouseY < this.loc.y + this.h && mouseIsPressed){
      gameState = 2
    }
  }
}
