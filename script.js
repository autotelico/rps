document.addEventListener("DOMContentLoaded", () => {
    
    const startButton = document.querySelector("#start-button");
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

    function getPlayerChoice() {
        let playerChoice = prompt("Choose: ");
        playerChoice = playerChoice.toLowerCase().trim();
        return playerChoice;
    }

    
    

    function playRound() {
        let playerChoice = getPlayerChoice();
        displayPlayerChoice.textContent = `You chose '${playerChoice}'`;
        let computerChoice = getComputerChoice();
        displayComputerChoice.textContent = `Computer chose '${computerChoice}'`;

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
            playAgainButton.innerHTML = 'Play Again';
            playAgainButton.id = 'play-again';
            playAgainContainer.appendChild(playAgainButton);
        }
            playAgainContainer.querySelector("button").addEventListener('click', () => {
                showWinner();
        })
    
    }


    // User interface starts here
    startButton.addEventListener('click', () => {
        startButton.style.display = 'none';
        showWinner();
    })

    toggleMusicButton.addEventListener('click', () => {
        if (musicPlaying) {
            bgMusic.pause();
            toggleMusicButton.src = "./images/no-music-icon.png";
        } else {
            bgMusic.currentTime = 0;
            bgMusic.play();
            toggleMusicButton.src = "./images/music-icon.png";
        }
        musicPlaying = !musicPlaying;
    })
});
