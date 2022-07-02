
function computerPlay() {
  // Generate a random number between 1 to 3
  let random = Math.floor(Math.random()*3) + 1;
    
  return random;
}

console.log(computerPlay());