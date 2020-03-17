//  Austin Matel
// 	10/31/19
//  This is a comment
//  The setup function function is called once when your program begins
var cubeWidth, food, direction, temp, button, clr, num;
var time;
var highscore = 0;
var score = 0;
var columns;
var rows;
var snake;
var oneCube = 0;
var gameState = 1;
var snakeNum = 1;
var attackerNum = 1;
var attackers = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  cubeWidth = 20;
  columns = width / cubeWidth;
  rows = height / cubeWidth;
  snake = new Snake(columns, rows);
  food = new Food(cubeWidth * int(random(0,800/cubeWidth)),cubeWidth * int(random(0,800/cubeWidth)));
  button = new Button(300, 600, 200, 100, "Start", color(255,0,0));
  loadAttackers();
}
function loadAttackers(){
  for(var i = 0; i < attackerNum; i++ ){
      attackers[i] = new Attacker(cubeWidth * int(random(0,800/cubeWidth)),cubeWidth * int(random(0,800/cubeWidth)));
  }
}
function runObjects(){//runs the snake and food
  snake.run();
  food.run();
  for(var i = 0; i < attackers.length; i++){
    attackers[i].run();
  }
}
function keyPressed(){//detects when the arrow keys are pressed
  if(keyCode === RIGHT_ARROW && direction !== 2){
    snake.vel.y = 0;
    snake.vel.x = cubeWidth;
    direction = 1;
  }
  if(keyCode === LEFT_ARROW && direction !== 1){
    snake.vel.y = 0;
    snake.vel.x = -cubeWidth;
    direction = 2;
  }
  if(keyCode === UP_ARROW && direction !== 4){
    snake.vel.x = 0;
    snake.vel.y = -cubeWidth;
    direction = 3;
  }
  if(keyCode === DOWN_ARROW && direction !== 3){
      snake.vel.x = 0;
      snake.vel.y = cubeWidth;
      direction = 4;
  }
}
function startGame(){//displays start screen
  textFont('Courier New');
  background(5,5,5);
  textSize(90);
  fill(0,255,0);
  text("Snake Game", 150, 100);
  button.run();
}
function playGame(){//runs the game
  time = int(millis()/1000);
  background(5,5,5);
  /*if(){
    loadAttackers();
  }*/
  runObjects();
  keyPressed();
  textSize(20);
  text("Score = "+score,10,20);
  frameRate(15);
  text("Highscore = "+highscore, 630, 20);
}
function endGame(){//ends the game
  fill(255);
  textSize(90);
  text("Game Over!!!", 100, 100);
  textSize(40);
  text("Press Spacesbar", 220, 600);
  if(score > highscore){
    highscore = score;
  }
  if(keyCode === 32){
    gameState = 2;
    snake = new Snake(columns, rows);
    food = new Food(cubeWidth * int(random(0,800/cubeWidth)),cubeWidth * int(random(0,800/cubeWidth)));
    snake.body = [];
    attackers = [];
    attackerNum = 1;
    loadAttackers();
  }
  score = 0;
}
//  The draw function is called @ 30 fps
function draw() {//pauses and ends game when snake dies
  if(gameState === 1){
    startGame();
  }
  if(gameState === 2){
    playGame();
    clr = color(random(255), random(255), random(255));
    if(time % 2 === 0){
      num = int(random(1,4))
    }
    if(time % 10 === 0){
      attackerNum = attackerNum + 1;
    }
  }
  if(gameState === 3){
    endGame();
  }
}
