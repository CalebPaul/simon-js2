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
