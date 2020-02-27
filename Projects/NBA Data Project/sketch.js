//  Austin Matel
// 	02/05/20
//  stats are here: https://www.kaggle.com/drgilermo/nba-players-stats#Seasons_Stats.csv
//  This is a comment
//  The setup function function is called once when your program begins
var statsArray = [];
var points = [];
var stats;
var player = "Michael Jordan";
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(50, 50, 50);
  fill(200, 30, 150);
  drawGraph();
  loadStats();
  makePoints(player, 10, 4);
}

//  The draw function is called @ 30 fps
function draw(){
  runPoints();
}
//draws the graph
function drawGraph(){
  fill(100, 150, 255);
  rect(100, 300, 600, 500);
  strokeWeight(5);
  line(150, 350, 150, 750);
  line(150, 750, 680, 750);
  fill(5,5,5);
  textSize(10);
  textFont("Georgia");
  text("Shot %", 110, 550);
  text("Player Age", 375, 765);
  textSize(5);
  text("(The shot percentages are inverted, I'm sorry)", 350, 770);
}
//draws points
function runPoints(){
  for(var i = 0; i < statsArray.length; i++){
    points[i].run();
  }
}
//loads the points
function makePoints(player, stat1, stat2){
  loadPlayerStats(player);
  textStyle(NORMAL);
  for(var i = 0; i < statsArray.length; i++){
    points[i] = new Point((int(statsArray[i].get(stat2)) * 20) - 200, float(statsArray[i].get(stat1) * 2500) - 800);
  }
}
//chooses the row of the selected player and shows the stats of this player
function loadPlayerStats(player){
  statsArray = stats.findRows(player,2);
  if(statsArray.length === 0){
    statsArray = stats.findRows(player+"*",2);
  }
}
//finds a specific stat in the table
function aggregateStats(player, stat){
  var results = [];
  for(var i = 0; i < statsArray.length; i++){
    //need to find a way to traverse array inside array
    results.push(float(statsArray[i].get(stat)));
  }
  return results;
}
