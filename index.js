// Global variables:
let userRoundsInput;
let currentRoundValue = 1;
let userScoreValue = 0;
let compScoreValue = 0;

const body = document.querySelector("body");
const darkLightMode = document.querySelector(".mode");
const lightMode = document.querySelector(".light");
const darkMode = document.querySelector(".dark");
const roundsInput = document.querySelector(".rounds-input");
const playButton = document.querySelector(".play-button");
const currentRound = document.querySelector(".current-round");
const totalRounds = document.querySelector(".total-rounds");
const gameInit = document.querySelector(".rounds");
const mainGame = document.querySelector(".main-game");
const resetButton = document.querySelector(".reset-button");
const userScore = document.querySelector(".user-score");
const compScore = document.querySelector(".comp-score");

// dark and light mode:
darkLightMode.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  lightMode.classList.toggle("hide");
  darkMode.classList.toggle("hide");
});

// Hide rounds interface: after css
// Show game interface: after css
// Show computer and user scores:
// Randomly generate computer choice:

// User selects rock/paper/scissors:

// Output winner/loser:

// Update round and score and reset computer choice

// Disabled button state:
document.addEventListener("DOMContentLoaded", function () {
  roundsInput.addEventListener("input", function () {
    // Check if the input field is empty
    if (roundsInput.value.trim() === "") {
      playButton.disabled = true; // Disable the button
    } else {
      playButton.disabled = false; // Enable the button
    }
  });

  // Initial check on page load
  if (roundsInput.value.trim() === "") {
    playButton.disabled = true;
  }

  roundsInput.focus();
});

// Allow button click with Enter key:
roundsInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && !playButton.disabled) {
    playButton.click();
  }
});

// Allow reset with Esc key:

// Button functionality:
playButton.addEventListener("click", function () {
  if (roundsInput.value.trim() !== "") {
    userRoundsInput = roundsInput.value;
    currentRound.textContent = currentRoundValue;
    totalRounds.textContent = userRoundsInput;
    compScore.textContent = compScoreValue;
    userScore.textContent = userScoreValue;
    // Hide the "rounds" section
    gameInit.classList.add("hide");

    // Show the "main-game" section
    mainGame.classList.remove("hide");
  }
});

// Reset button functionality:
resetButton.addEventListener("click", resetGame);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    resetGame();
  }
});

function resetGame() {
  gameInit.classList.remove("hide");
  mainGame.classList.add("hide");
  playButton.disabled = true;
  roundsInput.value = "";
  roundsInput.focus();
}
