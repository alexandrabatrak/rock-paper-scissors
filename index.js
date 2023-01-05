// # Rock-Paper-Scissors Pseudocode
// let play = confirm('Play a game?');

// 1. Initialize `choices` array: r, p, s. representing rock, paper, or scissors.
let options = ['rock', 'paper', 'scrissors'];
let win = 0;
let loss = 0;
let tie = 0;
game();

function game() {
  // 2. Prompt user to enter "r," "p," or "s".
  let userChoice = prompt('Choose from: rock, paper, scissors');
  // 3. Computer chooses a **random** value in a list of "r," "p," or "s."
  let computerChoice = options[Math.floor(Math.random() * options.length)];
  alert('Computer chose: ' + computerChoice);

  // 4. We determine if the user wins or not.

  //    Initialize `wins`, `losses`, `ties` variables to 0

  //    If user picks rock and if computer picks scissors, then user wins.
  if (userChoice === 'rock' && computerChoice === 'scissors') {
    alert('You win!');
    win++;
  }

  //    If user picks scissors and if computer picks paper, then user wins.
  if (userChoice === 'scissors' && computerChoice === 'paper') {
    alert('You Win!');
    win++;
  }

  //    If user picks paper and if computer picks rock, then user wins.
  if (userChoice === 'paper' && computerChoice === 'rock') {
    alert('You Win!');
    win++;
  }

  //    If user picks rock and if computer picks paper, then user loses.
  if (userChoice === 'rock' && computerChoice === 'paper') {
    alert('You Lose!');
    loss++;
  }

  //    If user picks scissors and if computer picks rock, then user loses.
  if (userChoice === 'scissors' && computerChoice === 'rock') {
    alert('You Lose!');
    loss++;
  }

  //    If user picks paper and if computer picks scissors, then user loses.
  if (userChoice === 'paper' && computerChoice === 'scissors') {
    alert('You Lose!');
    loss++;
  }

  //    If user picks the same as computer, then they tie.
  if (userChoice === computerChoice) {
    alert('draw');
    tie++;
  }

  // Statistics
  alert(
    'Total wins:' +
      win +
      '.' +
      'Total losses:' +
      loss +
      '.' +
      'Total ties' +
      tie +
      '.'
  );

  // 5. We then add to their score.
  //    If user wins, then we add one to their wins.
  //    If user loses, then we add one to their losses.
  //    If user ties, then we add one to their ties.
  // 6. Prompt user to play again.
  let playAgain = confirm('Play again?');
  if (playAgain) {
    for (i = 0; i <= 5; i++) {
      game();
    }
  }
}
