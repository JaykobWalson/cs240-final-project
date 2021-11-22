var game = new Game();

let blastMusic = document.getElementById("music");
blastMusic.addEventListener("click", function () {
  let music = new Audio("skrillex.mp3");
  music.play();
});

function drawShape() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(100, 75, 50, 0, 2 * Math.PI);
  ctx.stroke();
}
