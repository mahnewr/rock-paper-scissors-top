// Global variables:
let userRoundsInput;

const body = document.querySelector("body");
const darkLightMode = document.querySelector(".mode");
const lightMode = document.querySelector(".light");
const darkMode = document.querySelector(".dark");
const roundsInput = document.querySelector(".rounds-input");
const playButton = document.querySelector(".play-button");
const currentRound = document.querySelector(".current-round");
const totalRounds = document.querySelector(".total-rounds");

// dark and light mode:
darkLightMode.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  lightMode.classList.toggle("hide");
  darkMode.classList.toggle("hide");
});

// Capture user input and update totalRounds:
playButton.addEventListener("click", function () {
  userRoundsInput = roundsInput.value;
  totalRounds.textContent = userRoundsInput;
});

// Hide rounds interface: after css
// Show game interface: after css
// Show computer and user scores:

// Reset button functionality:
// 1.

// Randomly generate computer choice:

// User selects rock/paper/scissors:

// Output winner/loser:

// Update round and score and reset computer choice
