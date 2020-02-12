//  Austin Matel
// 	02/05/20
//  stats are here: https://www.kaggle.com/drgilermo/nba-players-stats#Seasons_Stats.csv
//  This is a comment
//  The setup function function is called once when your program begins
var statsArray =[];
var stats;
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(5, 5, 5);
  fill(200, 30, 150);
  loadStats();
  loadPlayerStats("Michael Jordan");
  console.log(statsArray[10]);
  console.log(aggregateStats("Michael Jordan", 10));
  loadPlayerStats("Kobe Bryant");
  console.log(aggregateStats("Kobe Bryant", 10));
}

//  The draw function is called @ 30 fps
function draw(){
  createPlayerSelectionList();
  getSelectedPlayers();
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
    results.push(statsArray[i].get(stat));
  }
  return results;
}
//creates a UI that allows the user to select which player's stats they want to look at
function createPlayerSelectionList(){
  playerSel = createSelect(true);
  playerSel.position((windowWidth-width)/2 + 270, (windowHeight-height)/2 + 40);
}
function getSelectedPlayers(){
  var chosenPlayers = [];
  for(var i = 0; i < playerSel.elt.selectedOptions.length; i++){
    chosenPlayers.push(playerSel.elt.selectedOptions[i].value);
  }
}
