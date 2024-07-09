"use strict";

let score = 20;
document.querySelector(".score").textContent = score;
const number = Math.trunc(Math.random() * 20 + 1);
document.querySelector(".number").textContent = "?";

let highscore = 0;

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  const number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".number").textContent = "?";

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".guess").value = " ";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";

  flag = false;
});

let flag = false;

document.querySelector(".check").addEventListener("click", function () {
  const g = Number(document.querySelector(".guess").value);

  if (flag == false) {
    if (!g) {
      document.querySelector(".message").textContent = "No number !";
    } else if (g == number) {
      document.querySelector(".message").textContent = "Correct Number !";
      score += 10;
      document.querySelector(".score").textContent = score;
      document.querySelector(".number").textContent = number;

      document.querySelector("body").style.backgroundColor = "#60b347";

      document.querySelector(".number").style.width = "30rem";

      if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
      }

      flag = true;
    } else if (g > number && score > 0) {
      if (g - number > 5)
        document.querySelector(".message").textContent = "Too High !";
      else document.querySelector(".message").textContent = "High !";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (g < number && score > 0) {
      if (number - g > 5)
        document.querySelector(".message").textContent = "Too Low !";
      else document.querySelector(".message").textContent = "Low !";
      score--;
      document.querySelector(".score").textContent = score;
    }
  }
});
