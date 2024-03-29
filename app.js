var game = new Game();
var music = new Audio("Shiny Tech III.mp3");
var musicPlaying = false;
var stage = 1;
console.log(stage);
var round = parseInt(document.getElementById("level").innerHTML);
let blastMusic = document.getElementById("music");
var colors = [];
var currentColor = document.getElementsByClassName("glowstage" + round);
// listOfColors();
blastMusic.addEventListener("click", function () {
  music.play();
  musicPlaying = true;
});

//Sets up the list of glowing colors that switch every round until the 5th round.
//Beyond the 5th * n round, the background color will go back to glowstage1.
// function listOfColors() {
//   for (let i = 0; i < 5; i++) {
//     let colorToAdd = document.getElementsByClassName("glowstage" + (i + 1));
//     colors[i] = colorToAdd;
//     console.log(colors[i]);
//   }
// }

let advanceRounds = document.getElementById("nextRound");
advanceRounds.addEventListener("click", function () {
  round++;
  stage++;
  // console.log(stage);
  // document.getElementById("level").innerHTML = round;
  // document.getElementById("level").classList.add("glowstage" + stage);
  // document.getElementById("title").classList.add("glowstage" + stage);
  // document.getElementById("colorOfRounds").classList.add("glowstage" + stage);
  document.getElementById("level").innerHTML = round;
  document.getElementById("level").classList.add("glowstage" + stage);
  document.getElementById("title").classList.add("glowstage" + stage);
  document.getElementById("colorOfRounds").classList.add("glowstage" + stage);
  // console.log(stage);
  if (stage % 5 == 0) {
    document.getElementById("level").innerHTML = round;
    document.getElementById("level").classList.add("glowstage" + 5);
    document.getElementById("title").classList.add("glowstage" + 5);
    document.getElementById("colorOfRounds").classList.add("glowstage" + 5);
    // for (let i = 1; i <= 5; i++) {
    //   document.getElementById("level").classList.remove("glowstage" + stage);
    //   document.getElementById("title").classList.remove("glowstage" + stage);
    //   document
    //     .getElementById("colorOfRounds")
    //     .classList.remove("glowstage" + stage);
    // }
  }
  if (stage > 5 && stage % 5 == 1) {
    stage = 1;
    for (let i = 1; i <= 5; i++) {
      document.getElementById("level").classList.remove("glowstage" + i);
      document.getElementById("title").classList.remove("glowstage" + i);
      document
        .getElementById("colorOfRounds")
        .classList.remove("glowstage" + i);
    }
    document.getElementById("level").innerHTML = round;
    document.getElementById("level").classList.add("glowstage" + stage);
    document.getElementById("title").classList.add("glowstage" + stage);
    document.getElementById("colorOfRounds").classList.add("glowstage" + stage);
  }

  //if (remainder == 1) {
  // document.getElementById("level").innerHTML = round;
  // document.getElementById("level").classList.add("glowstage" + this.innerHTML);
  // document.getElementById("title").classList.add("glowstage" + stage);
  // document.getElementById("colorOfRounds").classList.add("glowstage" + stage);
  // console.log(stage);
  // stage++;
  // if (stage > 5) {
  //   stage = 1;
  // }
  //}
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
