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
function playRound(playerSelection) {
  let player = playerSelection;
  let computer = computerPlay().toUpperCase();

  // Check if player and computer attacks are the same
  // 0 = Player loses, 1 = Player wins, 2 = Draw
  if (player == computer) {
    return 2;
  } else {
    // Check if the player is 'ROCK'
    if (player == 'ROCK') {
      if (computer == 'SCISSORS') {
        return 1;
      } else if (computer == 'PAPER') {
        return 0;
      }
      // Check if the player is 'SCISSORS'
    } else if (player == 'SCISSORS') {
      if (computer == 'PAPER') {
        return 1;
      } else if (computer == 'ROCK') {
        return 0;
      }
      // Check if the player is 'PAPER'
    } else if (player == 'PAPER') {
      if (computer == 'ROCK') {
        return 1;
      } else if (computer == 'SCISSORS') {
        return 0;
      }
    } else {
      return 'Something is wrong.';
    }
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  // Play for five rounds
  for (let i = 0; i < 5; i++) {
    let result = playRound(playerSelection);
    // Check who wins the playRound()
    // 1 = player won, 0 = player lose
    if (result == 1) {
      playerScore++;
      console.log('Player wins the round');
    } else if (result == 0) {
      computerScore++;
      console.log('Computer wins the round');
    } else {
      console.log('Draw');
    }

  }

  if (playerScore == computerScore) {
    console.log('Draw!');
  } else if (playerScore > computerScore) {
    console.log('Player wins!');
  } else if (playerScore < computerScore) {
    console.log('Computer wins!')
  }

  console.log('SCORE:\nPlayer: ' + playerScore + '. Computer: ' + computerScore + '.');
}

const playerSelection = prompt('Rock, paper, or scissors?').toUpperCase();

if (!(playerSelection == 'ROCK'
  || playerSelection == 'PAPER'
  || playerSelection == 'SCISSORS')) {
  console.log('Invalid player input');
} else {
  console.log(game());
}