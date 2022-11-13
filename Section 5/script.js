'use strict';
//DOM and DOM manipulation
//Documented object model - structured representation of the HTML

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When the input is blank
  if (!guess) {
    displayMessage('No number! ⛔️');

    //When player wins the game
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!📈' : 'Too low!📉');

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game over! 💀');

      document.querySelector('body').style.backgroundColor = '#b22222';

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = null;

  document.querySelector('.number').style.width = '15rem';
});
