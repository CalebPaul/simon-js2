(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Game(){
  this.colorList = ["yellow", "red", "blue", "green"];
  this.randomColorList = [];
}

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

},{}],2:[function(require,module,exports){
var Game = require("./../js/simon.js").gameModule;

$(document).ready(function(){

  $("form").submit(function() {
    event.preventDefault();
    var simon = new Game();
    simon.startList();
    var i = 0;
    var myVar = setInterval(function() {
      if(i==simon.randomColorList.length) {
        $("#output").text("<span id='turn'>Your turn!</span>");
        clearInterval(myVar);
      } else {
        $("#output").append('<span id="' + simon.randomColorList[i] +'">' + simon.randomColorList[i] + '</span>');
        i++;
      }
    }, 800);
  });

});

},{"./../js/simon.js":1}]},{},[2]);
