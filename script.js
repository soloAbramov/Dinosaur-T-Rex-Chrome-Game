const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const startBtn = document.querySelector(".btn");
const background = document.querySelector(".game");

window.onload = function () {
  startBtn.onclick = function start() {
    cactus.classList.add("movement");
    background.classList.add("movement2");
  };
};

document.addEventListener("keydown", function (event) {
  if (event.keyCode == 32) {
    jump();
  }
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    cactus.classList.add("movement");
    background.classList.add("movement2");
  }
  setTimeout(function () {
    dino.classList.remove("jump");
  }, 300);
}

let isAlive = setInterval(function () {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );

  if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 130) {
    cactus.classList.remove("movement");
    background.classList.remove("movement2");
    alert("Game Over!!");
  }
}, 10);
