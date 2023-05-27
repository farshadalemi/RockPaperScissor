const scoreBoard = {
    Wins: 0,
    Losses: 0,
    Tie: 0,
  };

  function playGame(playerMove) {
    const computerMove = pickComputerMove();
    let result = "";

    if (playerMove === "✂️Scissors") {
      if (computerMove === "🪨Rock") {
        result = "U lose :(";
      } else if (computerMove === "📄Paper") {
        result = "U win :)";
      } else if (computerMove === "✂️Scissors") {
        result = "tie :|";
      }
    } else if (playerMove === "📄Paper") {
      if (computerMove === "🪨Rock") {
        result = "U win :)";
      } else if (computerMove === "📄Paper") {
        result = "tie :|";
      } else if (computerMove === "✂️Scissors") {
        result = "lose :(";
      }
    } else if (playerMove === "🪨Rock") {
      if (computerMove === "🪨Rock") {
        result = "tie :|";
      } else if (computerMove === "📄Paper") {
        result = "lose :(";
      } else if (computerMove === "✂️Scissors") {
        result = "win :)";
      }
    }

    if (result === "win :)") {
      scoreBoard.Wins += 1;
    } else if (result === "lose :(") {
      scoreBoard.Losses += 1;
    } else if (result === "tie :|") {
      scoreBoard.Tie += 1;
    }

    alert(
      ` >> U picked ${playerMove} \n >> Computer picked ${computerMove} \n${result} \n\n Wins: ${scoreBoard.Wins}\n Losses: ${scoreBoard.Losses}\n Ties: ${scoreBoard.Tie}`
    );
  }

  function pickComputerMove() {
    let computerMove = "";
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "🪨Rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "📄Paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "✂️Scissors";
    }
    return computerMove;
  }

  const prompt = "What Ur move?";