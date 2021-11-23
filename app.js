var game = new Game();
var music = new Audio("skrillex.mp3");
let blastMusic = document.getElementById("music");
blastMusic.addEventListener("click", function () {
  music.play();
});

let stopMusic = document.getElementById("stop");
stopMusic.addEventListener("click", function () {
  music.pause();
  music.currentTime = 0; //stops and resets the music
});

function drawShape() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
}
