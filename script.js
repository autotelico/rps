document.addEventListener("DOMContentLoaded", () => {
    
    const displayPlayerChoice = document.querySelector(".display-player-choice");
    const displayComputerChoice = document.querySelector(".display-computer-choice");
    const result = document.querySelector("#result");
    const bgMusic = document.querySelector("#background-music");
    const toggleMusicButton = document.querySelector("#toggle-music-button");
    let musicPlaying = true;

    function getComputerChoice() {
        let computerChoice = Math.floor(Math.random() * 3) + 1;
        switch (computerChoice) {
            case 1:
                return 'rock';
            case 2:
                return 'paper';
            case 3:
                return 'scissors';
        }
    }

    function playRound() {
        let computerChoice = getComputerChoice();
        if (playerChoice === computerChoice) {
            return 'Draw.';
        } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'scissors' && computerChoice === 'paper' ||
        playerChoice === 'paper' && computerChoice === 'rock') {
            return `You win! ${playerChoice} beats ${computerChoice}.`;
        } else {
            return `You lose. ${computerChoice} beats ${playerChoice}.`;
        }
    }

    function showWinner() {
        result.textContent = playRound();
        let playAgainContainer = document.querySelector(".play-again-container");
        
        if (!playAgainContainer.querySelector("button")) {
            let playAgainButton = document.createElement("button");
            playAgainButton.textContent = 'Play Again';
            playAgainButton.id = 'play-again';
            playAgainContainer.appendChild(playAgainButton);
        }
            playAgainContainer.querySelector("button").addEventListener('click', () => {
                showWinner();
        })
    
    }


    // User interface starts here


    // New UI
    const optionButtons = document.querySelectorAll('.option');
    const playerP = document.querySelector('.display-player-choice');

    optionButtons.forEach(button => {

        button.addEventListener('click', (e) => {
            console.log("Event click happened");
            switch (e.target.id) {
                case 'rock':
                    playerP.textContent = `You played ${e.target.id}.`
                    break;
                case 'paper':
                    playerP.textContent = `You played ${e.target.id}.`
                    break;
                case 'scissors':
                    playerP.textContent = `You played ${e.target.id}.`
                    break;
            }
            let computerChoice = getComputerChoice();
                switch (computerChoice) {
                    case 1:
                return 'rock';
                    case 2:
                return 'paper';
                    case 3:
                return 'scissors';
                }
        })
    })
    

});
