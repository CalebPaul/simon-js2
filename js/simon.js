function Game(){
  this.colorList = ["yellow", "red", "blue", "green"];
  this.randomColorList = [];
}
var colorList = ["yellow", "red", "blue", "green"];

Game.prototype.generateRandomColor = function () {
  var colorIndex = parseInt(Math.floor(Math.random() * 4));
  var color = this.colorList[colorIndex];
  console.log(color);
  this.randomColorList.push(color);
}

Game.prototype.startList = function () {
  for(var i = 0; i < 4; i++) {
    this.generateRandomColor();
  }
}

exports.gameModule = Game;
