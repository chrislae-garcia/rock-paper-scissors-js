// Randomly generate a string between 'Rock', 'Paper', and 'Scissors'
function computerPlay() {
  // Generate a random number between 1 to 3
  let random = Math.floor(Math.random() * 3) + 1;

  // Returns the result 1 = Rock, 2 = Paper, 3 = Scissors 
  switch (random) {
    case 1:
      return 'Rock';
    case 2:
      return 'Paper';
    case 3:
      return 'Scissors';
  }
}

// Plays a single round between player and computer
function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toUpperCase();
  let computer = computerSelection.toUpperCase();

  // Check if player and computer attacks are the same
  if (player == computer) {
    return 'Draw';
  } else {
    // Check if the player is 'ROCK'
    if (player == 'ROCK') {
      if (computer == 'SCISSORS') {
        return 'You win! Rock beats Scissors';
      } else if (computer == 'PAPER') {
        return 'You lose! Paper beats Rock';
      }
    // Check if the player is 'SCISSORS'
    } else if (player == 'SCISSORS') {
      if (computer == 'PAPER') {
        return 'You win! Scissors beat Paper';
      } else if (computer == 'ROCK') {
        return 'You lose! Rock beats Scissors';
      }
    // Check if the player is 'PAPER'
    } else if (player == 'PAPER') {
      if (computer == 'ROCK') {
        return 'You win! Paper beats rock';
      } else if (computer == 'SCISSORS') {
        return 'You lose! Scissors beat Paper';
      }
    } else {
      return 'Something is wrong.';
    }
  }
}

const playerSelection = 'Scissors';
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
console.log('Player: ' + playerSelection + ' | Computer: ' + computerSelection);