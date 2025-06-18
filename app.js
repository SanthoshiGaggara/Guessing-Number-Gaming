let randomNumber = Math.ceil(Math.random() * 100);
let userInput = document.getElementById("userInput");
let gameResult = document.getElementById("gameResult");
console.log(randomNumber);
function checkGuess() {
  let guessedNumber = parseInt(userInput.value);
  if (guessedNumber === randomNumber) {
    gameResult.textContent = "Congratulations! You got it right.";
    gameResult.style.backgroundColor = "green";
  } else if (guessedNumber < randomNumber) {
    gameResult.textContent = "Too low, Try Again";
    gameResult.style.backgroundColor = "#1e217c";
  } else if (guessedNumber > randomNumber) {
    gameResult.textContent = "Too high, Try Again";
    gameResult.style.backgroundColor = "#1e217c";
  } else {
    gameResult.textContent = "Please enter valid input!";
    gameResult.style.backgroundColor = "red";
  }
}