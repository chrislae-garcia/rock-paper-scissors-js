
function computerPlay() {
  // Generate a random number between 1 to 3
  let random = Math.floor(Math.random()*3) + 1;

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

console.log(computerPlay());