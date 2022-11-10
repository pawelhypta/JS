'use strict';
//DOM and DOM manipulation
//Documented object model - structured representation of the HTML

/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🏆 Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 13;

document.querySelector('.guess').value = 23;*/

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (guess > 20 || guess < 1) {
    document.querySelector('.message').textContent =
      'Please enter a valid number! ⛔️';
  }
});
