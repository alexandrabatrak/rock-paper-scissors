let options = ['r', 'p', 's'];
let win = 0;
let loss = 0;
let tie = 0;

for (var i = 0; i <= 5; i++) {
  game();
}

// wrap it into function to be able to call it for Play Again option in case of invalid input
function game() {
  let userChoice = prompt('Choose from: R(rock), P(paper), S(scissors)');
  userChoice = userChoice.toLowerCase();

  if (options.includes(userChoice)) {
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    alert('Computer chose: ' + computerChoice);

    if (userChoice === computerChoice) {
      alert('draw');
      tie++;
    } else if (
      (userChoice === 'r' && computerChoice === 's') ||
      (userChoice === 's' && computerChoice === 'p') ||
      (userChoice === 'p' && computerChoice === 'r')
    ) {
      alert('You win!');
      win++;
    } else {
      alert('You Lose!');
      loss++;
    }
  } else {
    // this alerts as wrong input even if user presses cancel
    alert('Wrong input');
    let playAgain = confirm('Play again?');
    if (playAgain) {
      game();
    } else {
      return;
    }
  }
}
// Statistics
// Placed statistics outside the game function loop
alert(
  'Total wins: ' +
    win +
    '.' +
    'Total losses: ' +
    loss +
    '.' +
    'Total ties: ' +
    tie +
    '.'
);
// playAgain = confirm('Play again?');
// if (playAgain) {
//   game();
// }
