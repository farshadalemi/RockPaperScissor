const scoreBoard = JSON.parse(localStorage.getItem("scoreBoard"));

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "✂️Scissors✌️") {
    if (computerMove === "🪨Rock✊") {
      result = "💔 U lose 😭";
    } else if (computerMove === "📄Paper🫲") {
      result = "🥳 U win 😀";
    } else if (computerMove === "✂️Scissors✌️") {
      result = "👺 Tie 🥶";
    }
  } else if (playerMove === "📄Paper🫲") {
    if (computerMove === "🪨Rock✊") {
      result = "🥳 U win 😀";
    } else if (computerMove === "📄Paper🫲") {
      result = "👺 Tie 🥶";
    } else if (computerMove === "✂️Scissors✌️") {
      result = "💔 U lose 😭";
    }
  } else if (playerMove === "🪨Rock✊") {
    if (computerMove === "🪨Rock✊") {
      result = "👺 Tie 🥶";
    } else if (computerMove === "📄Paper🫲") {
      result = "💔 U lose 😭";
    } else if (computerMove === "✂️Scissors✌️") {
      result = "🥳 U win 😀";
    }
  }

  if (result === "🥳 U win 😀") {
    scoreBoard.Wins += 1;
  } else if (result === "💔 U lose 😭") {
    scoreBoard.Losses += 1;
  } else if (result === "👺 Tie 🥶") {
    scoreBoard.Tie += 1;
  }

  localStorage.setItem("scoreBoard", JSON.stringify(scoreBoard));

  alert(
    ` >> U picked ${playerMove} \n >> Computer picked ${computerMove} \n${result} \n\n Wins: ${scoreBoard.Wins}\n Losses: ${scoreBoard.Losses}\n Ties: ${scoreBoard.Tie}`
  );
}

function pickComputerMove() {
  let computerMove = "";
  const randomNumber = Math.random();

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "🪨Rock✊";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "📄Paper🫲";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = "✂️Scissors✌️";
  }
  return computerMove;
}

const prompt = "What Ur move?";
