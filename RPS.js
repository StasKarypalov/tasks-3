function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
  
    if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      return "You win! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === computerSelection) {
      return "It's a tie! Both players chose " + playerSelection;
    } else {
      return "You lose! " + computerSelection + " beats " + playerSelection;
    }
  }
  
  function game(playerSelection) {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 2; i++) {
      const computerSelection = computerPlay();
      const result = playRound(playerSelection, computerSelection);
      console.log(result);
  
      if (result.includes("победа")) {
        playerScore++;
      } else if (result.includes("проиграл")) {
        computerScore++;
      }
    }
  
    console.log("Final Score:");
    console.log("Player: " + playerScore);
    console.log("Computer: " + computerScore);
  
    if (playerScore > computerScore) {
      console.log("победа");
    } else if (playerScore < computerScore) {
      console.log("проиграл");
    } else {
      console.log("поровну");
    }
  }
  
  game('rock');