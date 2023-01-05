// # Rock-Paper-Scissors Pseudocode
let options = ['r', 'p', 's'];
let win = 0;
let loss = 0;
let tie = 0;

// for loop makes it stuck after 3 loops and unable to cancel
// for (i = 0; i <= 3; i++) {
game();
// }

function game() {
  let userChoice = prompt('Choose from: R(rock), P(paper), S(scissors)');
  if (options.includes(userChoice)) {
    let computerChoice = options[Math.floor(Math.random() * options.length)];
    alert('Computer chose: ' + computerChoice);

    if (
      (userChoice === 'r' && computerChoice === 's') ||
      (userChoice === 's' && computerChoice === 'p') ||
      (userChoice === 'p' && computerChoice === 'r')
    ) {
      alert('You win!');
      win++;
    }

    if (
      (userChoice === 'r' && computerChoice === 'p') ||
      (userChoice === 's' && computerChoice === 'r') ||
      (userChoice === 'p' && computerChoice === 's')
    ) {
      alert('You Lose!');
      loss++;
    }
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
    playAgain = confirm('Play again?');
    if (playAgain) {
      game();
    }
  } else {
    alert('Wrong input');
    let playAgain = confirm('Play again?');
    if (playAgain) {
      game();
    } else {
      return;
    }
  }
}
