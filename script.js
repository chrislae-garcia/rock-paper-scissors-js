const body = document.querySelector('body');
const btnRock = document.getElementById('rock');
const btnPaper = document.getElementById('paper');
const btnScissors = document.getElementById('scissors');

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

  console.log(playerSelection);

  // Check if player and computer attacks are the same
  // 0 = Player loses, 1 = Player wins, 2 = Draw
  if (player == computer) { 
    displayWinner(2);
  } else {
    // Check if the player is 'ROCK'
    if (player == 'ROCK') {
      switch (computer) {
        case 'SCISSORS': 
          displayWinner(1);
          break;
        case 'PAPER' : 
          displayWinner(0);
          break;
      }
      // Check if the player is 'SCISSORS'
    } else if (player == 'SCISSORS') {
      switch (computer) {
        case 'PAPER' : 
          displayWinner(1);
          break;
        case 'ROCK' : 
          displayWinner(0);
          break;
      }
      // Check if the player is 'PAPER'
    } else if (player == 'PAPER') {
      switch (computer) {
        case 'ROCK' : 
          displayWinner(1);
          break;
        case 'SCISSORS' : 
          displayWinner(0);
      }
    }
  }
}


let playerScore = 0;
let computerScore = 0;
function displayWinner(winner) {
  console.log(winner);
  const divResult = document.createElement('div');
  
  if (winner == 1) {
    playerScore++;
    divResult.textContent = `Player wins! Player: ${playerScore} | Computer: ${computerScore}`;
  } else if (winner == 0) {
    computerScore++;
    divResult.textContent = `Computer wins! Player: ${playerScore} | Computer: ${computerScore}`;
  } else {
    divResult.textContent = `Draw! Player: ${playerScore} | Computer: ${computerScore}`;
  }

  if (playerScore == 5 || computerScore == 5){
    if (playerScore > computerScore) {
      divResult.textContent = `Player wins the game! Player: ${playerScore} | Computer: ${computerScore}`;
    } else {
      divResult.textContent = `Computer wins the game! Player:${playerScore} | Computer: ${computerScore}`;
    }
    body.appendChild(divResult);
    
  } else {
    body.appendChild(divResult);
  }

}

function game() {
  let playerScore = 0;
  let computerScore = 0;

    // Display overall game results
  if (playerScore == computerScore) {
    console.log('Draw!');
  } else if (playerScore > computerScore) {
    console.log('Player wins!');
  } else if (playerScore < computerScore) {
    console.log('Computer wins!');
  }

  // Display overall score 
  console.log('SCORE:\nPlayer: ' + playerScore + '. Computer: ' + computerScore + '.');
}

// const playerSelection = prompt('Rock, paper, or scissors?').toUpperCase();

// Check if the user's input is valid or not
// if (!(playerSelection == 'ROCK'
//   || playerSelection == 'PAPER'
//   || playerSelection == 'SCISSORS')) {
//   console.log('Invalid player input');
// } else {
//   console.log(game());
// }

btnRock.addEventListener('click', () => {playRound('ROCK')});
btnPaper.addEventListener('click', () => {playRound('PAPER')});
btnScissors.addEventListener('click', () => {playRound('SCISSORS')});