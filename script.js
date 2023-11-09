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


    

    // New UI
    
    optionButtons.forEach(button => {

        button.addEventListener('click', (e) => {
            switch (e.target.id) {
                case 'rock':
                    playerAnswerDisplay.textContent = `You played ${e.target.id}.`
                    break;
                case 'paper':
                    playerAnswerDisplay.textContent = `You played ${e.target.id}.`
                    break;
                case 'scissors':
                    playerAnswerDisplay.textContent = `You played ${e.target.id}.`
                    break;
            }
            let computerChoice = getComputerChoice();
                computerAnswerDisplay.textContent = `Computer played ${computerChoice}.`
            
            
        })
    })
    

});
