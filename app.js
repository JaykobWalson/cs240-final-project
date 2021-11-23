var game = new Game();
var music = new Audio("skrillex.mp3");
var musicPlaying = false;
let blastMusic = document.getElementById("music");
blastMusic.addEventListener("click", function () {
  music.play();
  musicPlaying = true;
});
let resetMusic = document.getElementById("music");
resetMusic = addEventListener("click", function () {
  if (musicPlaying) {
    music.currentTime = 0;
  }
});
let stopMusic = document.getElementById("stop");
stopMusic.addEventListener("click", function () {
  music.pause();
  music.currentTime = 0; //stops and resets the music
  musicPlaying = false;
});
