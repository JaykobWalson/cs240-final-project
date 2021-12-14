var game = new Game();
var stage = 1;
console.log(stage);
var round = parseInt(document.getElementById("level").innerHTML);
let blastMusic = document.getElementById("music");
var colors = [];
var currentColor = document.getElementsByClassName("glowstage" + round);
// listOfColors();
//Sets up the list of glowing colors that switch every round until the 5th round.
//Beyond the 5th * n round, the background color will go back to glowstage1.
// function listOfColors() {
//   for (let i = 0; i < 5; i++) {
//     let colorToAdd = document.getElementsByClassName("glowstage" + (i + 1));
//     colors[i] = colorToAdd;
//     console.log(colors[i]);
//   }
// }

// let advanceRounds = document.getElementById("nextRound");
// advanceRounds.addEventListener("click", function () {
//   round++;
//   stage++;
//   document.getElementById("level").innerHTML = round;
//   document.getElementById("level").classList.add("glowstage" + stage);
//   document.getElementById("title").classList.add("glowstage" + stage);
//   document.getElementById("colorOfRounds").classList.add("glowstage" + stage);
//   if (stage % 5 == 0) {
//     document.getElementById("level").innerHTML = round;
//     document.getElementById("level").classList.add("glowstage" + 5);
//     document.getElementById("title").classList.add("glowstage" + 5);
//     document.getElementById("colorOfRounds").classList.add("glowstage" + 5);
//   }
//   if (stage > 5 && stage % 5 == 1) {
//     stage = 1;
//     for (let i = 1; i <= 5; i++) {
//       document.getElementById("level").classList.remove("glowstage" + i);
//       document.getElementById("title").classList.remove("glowstage" + i);
//       document
//         .getElementById("colorOfRounds")
//         .classList.remove("glowstage" + i);
//     }
//     document.getElementById("level").innerHTML = round;
//     document.getElementById("level").classList.add("glowstage" + stage);
//     document.getElementById("title").classList.add("glowstage" + stage);
//     document.getElementById("colorOfRounds").classList.add("glowstage" + stage);
//   }

//   //if (remainder == 1) {
//   // document.getElementById("level").innerHTML = round;
//   // document.getElementById("level").classList.add("glowstage" + this.innerHTML);
//   // document.getElementById("title").classList.add("glowstage" + stage);
//   // document.getElementById("colorOfRounds").classList.add("glowstage" + stage);
//   // console.log(stage);
//   // stage++;
//   // if (stage > 5) {
//   //   stage = 1;
//   // }
//   //}
// });

addEventListener("keypress", (event) => {
  if (event.key == " " && !game.slingShot.bodyB.velocityPrev) {
    let equation = Equations.createProblem(game.difficulty);
    let ans = window.prompt(
      `${equation.string.substring(1, equation.string.length - 1)} = `
    );
    if (ans == equation.value) {
      Matter.Composite.add(game.engine.world, game.slingShot.bodyB);
      game.streaks++;
      game.difficulty += Math.round(game.streaks / 5);
    } else {
      let diff = 1 - 1 / (game.streaks + 2);
      game.difficulty *= diff;
      game.difficulty = Math.floor(game.difficulty);
      game.streaks = 0;
    }
  }
});
var audio = new Audio("sounds/Cloud Armada-TestSong.mp3");
var counter = true;
var button = document.querySelector("#musicButton");
console.log(button);
function playMusic() {
  if (counter == true) {
    audio.play();
    button.innerHTML = "II";
    counter = false;
  } else {
    audio.pause();
    button.innerHTML = "▶";
    counter = true;
  }
}
