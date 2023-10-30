function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

function getPlayerChoice() {
  // const input = prompt("What your choice?: ").toLowerCase();
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    default:
      return "scissors";
  }
}

function playRound(computerChoice, playerChoice) {
  const inputs = [computerChoice, playerChoice];
  if (inputs[0] == inputs[1]) {
    return "draw";
  }
  if (inputs[0] == "rock" && inputs[1] == "paper") {
    return "player win";
  }
  if (inputs[0] == "rock" && inputs[1] == "scissors") {
    return "computer win";
  }
  if (inputs[0] == "paper" && inputs[1] == "rock") {
    return "computer win";
  }
  if (inputs[0] == "paper" && inputs[1] == "scissors") {
    return "player win";
  }
  if (inputs[0] == "scissors" && inputs[1] == "rock") {
    return "player win";
  }
  if (inputs[0] == "scissors" && inputs[1] == "paper") {
    return "computer win";
  }
}

function playGame(rounds) {
  let avgComputer = 0;
  let avgPlayer = 0;
  
  for (let i = 0; i < rounds; i++) {
    let pcChoice = getComputerChoice();
    let userChoice = getPlayerChoice();
    let roundResult = playRound(pcChoice, userChoice);

    if (roundResult == "player win") {
      avgPlayer++;
    }
    if (roundResult == "computer win") {
      avgComputer++;
    }
  }

  if (avgComputer > avgPlayer) {
    return "computer wins the match";
  }
  if (avgComputer < avgPlayer) {
    return "player wins the match";
  }
  if (avgComputer == avgPlayer) {
    return "somehow this match draw";
  }
}

console.log(playGame(5));
