document.addEventListener("DOMContentLoaded", function () {
    var optionButtons = document.querySelectorAll(".option");
    var playerAnswerDisplay = document.querySelector(".display-player-choice");
    var computerAnswerDisplay = document.querySelector(".display-computer-choice");
    var result = document.querySelector("#result");
    function getComputerChoice() {
        var computerChoice = Math.floor(Math.random() * 3) + 1;
        switch (computerChoice) {
            case 1:
                return "rock";
            case 2:
                return "paper";
            case 3:
                return "scissors";
        }
    }
    optionButtons.forEach(function (button) {
        button.addEventListener("click", function (e) {
            var playerChoice = e.target.id;
            playerAnswerDisplay.textContent = "You played ".concat(playerChoice, ".");
            var computerChoice = getComputerChoice();
            computerAnswerDisplay.textContent = "Computer played ".concat(computerChoice, ".");
            result.textContent = getWinner(playerChoice, computerChoice);
        });
    });
    function getWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'Draw.';
        }
        else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
            playerChoice === 'scissors' && computerChoice === 'paper' ||
            playerChoice === 'paper' && computerChoice === 'rock') {
            return "You win!";
        }
        else {
            return "You lose.";
        }
    }
});
