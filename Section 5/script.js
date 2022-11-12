'use strict';
//DOM and DOM manipulation
//Documented object model - structured representation of the HTML

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🏆 Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 23;*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When the input is blank
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ⛔️';

    //When player wins the game
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🏆 Correct number!';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    ///When the number is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!📈';

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over! 💀';

      document.querySelector('body').style.backgroundColor = '#b22222';

      document.querySelector('.score').textContent = 0;
    }

    //When the number is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!📉';

      score--;

      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'Game over! 💀';

      document.querySelector('body').style.backgroundColor = '#b22222';

      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';

  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.guess').value = null;

  document.querySelector('.number').style.width = '15rem';
});
