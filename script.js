'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // Check if the guess is no input
  if (!guess) {
    displayMessage('⛔️ No number!');

    // when player wins the game
  } else if (guess === secretNumber) {
    displayMessage( '🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
//  when guess is different
  } else if (guess !== secretNumber) {

    if (score > 1) {
       displayMessage ( guess > secretNumber ?'📈 Too High!' : '📉 Too Low!');
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMessage('💥 You lost the game!');
        document.querySelector('.score').textContent = 0;
      }

  }
})
  



document.querySelector('.again').addEventListener('click', function () {

    score = 20
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('.number').textContent ="?"
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

    
})
