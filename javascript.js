const availableChoices = ['rock', 'paper', 'scissors'];
let playAgain = true;

while (playAgain) {
const computerChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
let playerChoice = prompt('Please enter Rock, Paper, or Scissors to play the game.');

playerChoice = playerChoice.toLowerCase();

if (!availableChoices.includes(playerChoice)) {
    console.log('The player did not choose rock, paper, or scissors.');
} else if (playerChoice === computerChoice) {
    console.log(`The game is a tie with ${playerChoice}.`);
} else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
) {
    console.log(`The player has won the game with ${playerChoice}.`);
} else {
    console.log(`The player has lost the game with ${playerChoice}.`);
}

const playAgainResponse = prompt('Do you want to play again? (yes/no)');
    playAgain = playAgainResponse.toLowerCase() === 'yes';
    if (playAgainResponse.toLowerCase() === 'no') {
    console.log('Thanks for playing!');
    playAgain = false;
    }
}