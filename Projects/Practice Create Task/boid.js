//Austin Matel
//2/25/20
class Boid{
  constructor(x, y){
    this.loc = createVector(x, y);
  }
  // This runs all of the Boid code
  run(){
    this.checkEdges();
    this.followMouse();
  }
  // This makes sure that the boid doesn't follow the mous all over the screen
  checkEdges(){
    if (this.loc.x < 0){
      this.loc.x = 0;
    }
    if (this.loc.x > width){
      this.loc.x = 800;
    }
    if (this.loc.y < 0){
      this.loc.y = 0;
    }
    if (this.loc.y > height){
        this.loc.y = 800;
    }
  }
  // This makes the boid follow the mouse
  followMouse(){
    this.loc.x = mouseX;
    this.loc.y = mouseY;
  }
}
