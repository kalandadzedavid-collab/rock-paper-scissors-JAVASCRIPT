document.querySelector(".rules").addEventListener("click", (btn) => {
  document.querySelector(".modal").classList.remove("hidden");
});
document.querySelector(".closerules").addEventListener("click", (btn) => {
  document.querySelector(".modal").classList.add("hidden");
});

const spells = document.querySelectorAll(".spells");
const spellsArray = [
  "<img src='./svgs/paper.svg' alt=''>",
  "<img src='./svgs/scissors.svg' alt=''>",
  "<img src='./svgs/rock.svg' alt=''>",
];

const spellsScreen = document.querySelector(".items");
const pickedSpellsScreen = document.querySelector(".pickedspells");
const decision = document.querySelector(".decision");
const winLoseDraw = document.querySelector(".decisiontext");
const scoreNum = document.querySelector(".scorenum");

let score = 0;

spells.forEach((i) => {
  i.addEventListener("click", () => {
    let pickedSpell = +i.id[1];

    let botPickedSpell = Math.floor(Math.random() * 3);

    spellsScreen.classList.add("hidden");
    pickedSpellsScreen.classList.remove("hidden");
    

    document.querySelector(
      ".homepick"
    ).innerHTML = `${spellsArray[pickedSpell]}  <h3>YOU PICKED</h3>`;

  

    setTimeout(() => {
        decision.classList.remove("hidden");
  document.querySelector(
      ".botpick"
    ).innerHTML = `${spellsArray[botPickedSpell]} <h3>THE HOUSE PICKED</h3>`;
     scoreLogic(pickedSpell, botPickedSpell);
    }, 1500)



   
  });
});

const playAgainBtn = document.querySelector(".playagain");

playAgainBtn.addEventListener("click", () => {
  spellsScreen.classList.remove("hidden");
  pickedSpellsScreen.classList.add("hidden");
  decision.classList.add("hidden");

  document.querySelector(
      ".botpick"
    ).innerHTML = ""
});

function scoreLogic(pickedSpell, botPickedSpell) {
  if (pickedSpell === 0 && botPickedSpell === 0) {
    winLoseDraw.textContent = "DRAW";
  } else if (pickedSpell === 0 && botPickedSpell === 1) {
    winLoseDraw.textContent = "YOU LOSE";

    if (score > 0) {
      score--;
    }

    scoreNum.textContent = score;
  } else if (pickedSpell === 0 && botPickedSpell === 2) {
    winLoseDraw.textContent = "YOU WIN";
    score++;
    scoreNum.textContent = score;
  } else if (pickedSpell === 1 && botPickedSpell === 0) {
    winLoseDraw.textContent = "YOU WIN";
    score++;
    scoreNum.textContent = score;
  } else if (pickedSpell === 1 && botPickedSpell === 1) {
    winLoseDraw.textContent = "DRAW";
  } else if (pickedSpell === 1 && botPickedSpell === 2) {
    winLoseDraw.textContent = "YOU LOSE";

    if (score > 0) {
      score--;
    }

    scoreNum.textContent = score;
  } else if (pickedSpell === 2 && botPickedSpell === 0) {
    winLoseDraw.textContent = "YOU LOSE";

    if (score > 0) {
      score--;
    }

    scoreNum.textContent = score;
  } else if (pickedSpell === 2 && botPickedSpell === 1) {
    winLoseDraw.textContent = "YOU WIN";
    score++;
    scoreNum.textContent = score;
  } else if (pickedSpell === 2 && botPickedSpell === 2) {
    winLoseDraw.textContent = "DRAW";
  }
}
