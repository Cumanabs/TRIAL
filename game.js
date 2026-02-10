if (!document.querySelector(".container")) return;

const gameContainer = document.querySelector(".container"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image"),
  userScoreEl = document.getElementById("userScore"),
  cpuScoreEl = document.getElementById("cpuScore"),
  actionButtons = document.querySelector(".action-buttons"),
  continueBtn = document.getElementById("continueBtn"),
  retryBtn = document.getElementById("retryBtn");

let userScore = 0;
let cpuScore = 0;
let gameOver = false;

optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    if (gameOver) return;

    image.classList.add("active");
    userResult.src = cpuResult.src =
      "https://codingstella.com/wp-content/uploads/2024/01/download.png";
    result.textContent = "Wait...";

    optionImages.forEach((img, i) => {
      i !== index && img.classList.remove("active");
    });

    gameContainer.classList.add("start");

    setTimeout(() => {
      gameContainer.classList.remove("start");

      let imageSrc = e.target.querySelector("img").src;
      userResult.src = imageSrc;

      let randomNumber = Math.floor(Math.random() * 3);
      let cpuImages = [
        "https://codingstella.com/wp-content/uploads/2024/01/download.png",
        "https://codingstella.com/wp-content/uploads/2024/01/download-1.png",
        "https://codingstella.com/wp-content/uploads/2024/01/download-2.png"
      ];
      cpuResult.src = cpuImages[randomNumber];

      let cpuValue = ["R", "P", "S"][randomNumber];
      let userValue = ["R", "P", "S"][index];

      let outcomes = {
        RR: "Draw",
        RP: "Computer",
        RS: "Kamu",
        PP: "Draw",
        PR: "Kamu",
        PS: "Computer",
        SS: "Draw",
        SR: "Computer",
        SP: "Kamu"
      };

      let outcome = outcomes[userValue + cpuValue];

      if (outcome === "Kamu") {
        userScore++;
        userScoreEl.textContent = userScore;
        result.textContent = "Kamu Menang 🎉";
      } else if (outcome === "Computer") {
        cpuScore++;
        cpuScoreEl.textContent = cpuScore;
        result.textContent = "Yahh.. kalah deh 😭";
      } else {
        result.textContent = "Seri!";
        return;
      }

      if (userScore === 5) {
        gameOver = true;
        result.textContent = "KAMU MENANG!! 🎉 Mau lanjut?";
        actionButtons.classList.remove("hidden");
        retryBtn.classList.add("hidden");
      }

      if (cpuScore === 5) {
        gameOver = true;
        result.textContent = "Yahh.. kalah deh 😭, Mau coba lagi?";
        actionButtons.classList.remove("hidden");
        continueBtn.classList.add("hidden");
      }
    }, 2000);
  });
});

// tombol lanjut
continueBtn.addEventListener("click", () => {
  window.location.href = "/TRIAL/Prank/index.html";

});

// tombol coba lagi
retryBtn.addEventListener("click", () => {
  resetGame();
});

function resetGame() {
  userScore = 0;
  cpuScore = 0;
  gameOver = false;
  userScoreEl.textContent = 0;
  cpuScoreEl.textContent = 0;
  result.textContent = "Let's Play!!";
  actionButtons.classList.add("hidden");
  continueBtn.classList.remove("hidden");
  retryBtn.classList.remove("hidden");

}

