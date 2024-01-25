document.addEventListener("DOMContentLoaded", () => {
  const optionButtons: NodeList = document.querySelectorAll(".option")!;
  const playerAnswerDisplay: HTMLParagraphElement = document.querySelector(
    ".display-player-choice"
  )!;
  const computerAnswerDisplay: HTMLParagraphElement = document.querySelector(
    ".display-computer-choice"
  )!;
  const result: HTMLParagraphElement = document.querySelector("#result")!;

  function getComputerChoice() {
    let computerChoice: number = Math.floor(Math.random() * 3) + 1;
    switch (computerChoice) {
      case 1:
        return "rock";
      case 2:
        return "paper";
      case 3:
        return "scissors";
    }
  }

  optionButtons.forEach((button) => {
    button.addEventListener("click", (e: Event) => {
      let playerChoice: any = e.target.id!;
      playerAnswerDisplay.textContent = `You played ${playerChoice}.`;
      let computerChoice: string = getComputerChoice()!;
      computerAnswerDisplay.textContent = `Computer played ${computerChoice}.`;
      result.textContent = getWinner(playerChoice, computerChoice)!;
    });
  });

  function getWinner(playerChoice: string, computerChoice: string) {
    if (playerChoice === computerChoice) {
        return 'Draw.';
    } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
    playerChoice === 'scissors' && computerChoice === 'paper' ||
    playerChoice === 'paper' && computerChoice === 'rock') {
        return `You win!`;
    } else {
        return `You lose.`;
    }  
  }
});
