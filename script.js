
const introText = document.querySelector(".intro-text");
const resultsText = document.querySelector(".results-text");
const buttons = document.querySelectorAll("button");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");

//introText.textContent = 'this is the introduction'
//introText.style.cssText = 'border: 4px solid black;'



/*buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(playRound('ROCK')
    })
});*/

function computerPlay() { 
    let randomPlay = Math.floor(Math.random() * 3);
    if (randomPlay === 0) {
        return 'Rock'
    } else if (randomPlay === 1) {
        return 'Paper'
    } else {
        return 'Scissors'
    };
    
}


function playRound(playerSelection, compMove) {
    if (playerSelection === 'ROCK') {
        if (compMove === 'Rock') {
            return 'Tie! You both chose Rock.'
        } else if (compMove === 'Paper') {
            return 'You lose! Paper beats Rock'
        } else {
            return 'You win! Rock beats Scissors'
        }

    } else if (playerSelection === 'PAPER') {
        if (compMove === 'Rock') {
            return 'You win! Paper beats Rock'
        } else if (compMove === 'Paper') {
            return 'Tie! You both chose Paper'
        } else {
            return 'You lose! Scissors beats Paper'
        }
    } else {
        if (compMove === 'Rock') {
            return 'You lose! Scissors beats Rock'
        } else if (compMove === 'Paper') {
            return 'You win! Scissors beats Paper'
        } else {
            return 'Tie! You both chose Scissors!'
        }
    }

}
//let compMove = computerPlay()
let playerSelection = ''
let playerCounter = 0
let computerCounter = 0
rockBtn.addEventListener('click', () => {
    resultsText.textContent = playRound('ROCK', computerPlay());
    console.log(resultsText.textContent[4])
    if (resultsText.textContent[4] === 'w') {
        playerCounter += 1;
        if (playerCounter === 5) {
            resultsText.textContent = 'You win! Select an option (rock, paper or scissors) to play again.'
            computerCounter = 0
            playerCounter = 0
        } else {
           resultsText.textContent += `player score: ${playerCounter}`
        }
    } else if (resultsText.textContent[4] === 'l') {
        computerCounter += 1;
        if (computerCounter === 5) {
            resultsText.textContent = 'You lose. Select an option (rock, paper or scissors) to play again.'
            computerCounter = 0
            playerCounter = 0
        } else {
            resultsText.textContent += `computer score: ${computerCounter}`;
        }
   
    } else {
        resultsText.textContent += 'tie! no score change'
    }
});
paperBtn.addEventListener('click', () => {
    resultsText.textContent = playRound('PAPER', computerPlay());
    console.log(resultsText.textContent[4])
    if (resultsText.textContent[4] === 'w') {
        playerCounter += 1;
        if (playerCounter === 5) {
            resultsText.textContent = 'You win! Select an option (rock, paper or scissors) to play again.'
            computerCounter = 0
            playerCounter = 0
        } else {
           resultsText.textContent += `player score: ${playerCounter}`
        }
    } else if (resultsText.textContent[4] === 'l') {
        computerCounter += 1;
        if (computerCounter === 5) {
            resultsText.textContent = 'You lose. Select an option (rock, paper or scissors) to play again.'
            computerCounter = 0
            playerCounter = 0
        } else {
            resultsText.textContent += `computer score: ${computerCounter}`;
        }
   
    } else {
        resultsText.textContent += 'tie! no score change'
    }
});
scissorsBtn.addEventListener('click', () => {
    resultsText.textContent = playRound('SCISSORS', computerPlay());
    console.log(resultsText.textContent[4])
    if (resultsText.textContent[4] === 'w') {
        playerCounter += 1;
        if (playerCounter === 5) {
            resultsText.textContent = 'You win! Select an option (rock, paper or scissors) to play again.'
            computerCounter = 0
            playerCounter = 0
        } else {
           resultsText.textContent += `player score: ${playerCounter}`
        }
    } else if (resultsText.textContent[4] === 'l') {
        computerCounter += 1;
        if (computerCounter === 5) {
            resultsText.textContent = 'You lose. Select an option (rock, paper or scissors) to play again.'
            computerCounter = 0
            playerCounter = 0
        } else {
            resultsText.textContent += `computer score: ${computerCounter}`;
        }
   
    } else {
        resultsText.textContent += 'tie! no score change'
    }
});




/*function game(playerSelection {
    playerCounter = 0
    compCounter = 0
    while (playerCounter < 5) && (compCounter < 5) {
        compMove = computerPlay();
        playerSelection = prompt("make your move: ");
        playerSelection = playerSelection.toUpperCase();
        round = playRound(playerSelection;
        if (round[4] === 'w') {
            playerCounter += 1;
            return (`You won that one. Score is now: 
              Player: ${playerCounter}, Computer: ${compCounter}`)
        } else if (round[4] === 'l') {
            compCounter += 1;
            return (`You lost that one. Score is now: 
              Player: ${playerCounter}, Computer: ${compCounter}`)
        } else {
            return (`You tied on that one. Score is: 
              Player: ${playerCounter}, Computer: ${compCounter}`);
            
        }
    }
    if (playerCounter > compCounter) {
        return ('Congrats, you win!');
    } else if (compCounter > playerCounter) {
        return ('You lost. Computer wins.');
    } else {
        return ("It's a tie! Nobody wins.");
    }
}*/


