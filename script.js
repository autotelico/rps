document.addEventListener("DOMContentLoaded", () => {
    
    const optionButtons = document.querySelectorAll('.option');
    const playerAnswerDisplay = document.querySelector('.display-player-choice');
    const computerAnswerDisplay = document.querySelector('.display-computer-choice');
    const result = document.querySelector("#result");

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

    // function playRound() {
    //     let computerChoice = getComputerChoice();
    //     let playerChoice = 
    //     if (playerChoice === computerChoice) {
    //         return 'Draw.';
    //     } else if (playerChoice === 'rock' && computerChoice === 'scissors' ||
    //     playerChoice === 'scissors' && computerChoice === 'paper' ||
    //     playerChoice === 'paper' && computerChoice === 'rock') {
    //         return `You win! ${playerChoice} beats ${computerChoice}.`;
    //     } else {
    //         return `You lose. ${computerChoice} beats ${playerChoice}.`;
    //     }
    // }
    

    // New UI
    
    optionButtons.forEach(button => {

        button.addEventListener('click', (e) => {
           console.log(`Player played ${e.target.id}`);
            return e.target.id;

                    
        })
    })
    
    function showWinner() {
        let computerChoice = getComputerChoice();
                computerAnswerDisplay.textContent = `Computer played ${computerChoice}.`
            let playerChoice = e.target.id;
            console.log(playerChoice);
            
    }

});
