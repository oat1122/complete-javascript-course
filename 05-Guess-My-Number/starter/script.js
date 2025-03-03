'use strict';

// console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.message').textContent='Correct Number!😭');

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;
// console.log((document.querySelector('.guess').value));
// document.querySelector('.secret').textContent = Number('?');
let secret = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = '?';
console.log(secret);

let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guess === secret) {
    console.log(
      // (document.querySelector('.message').textContent = 'Correct Number!😀😃😄')
      displayMessage('Correct Number!😀😃😄')
    );
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secret;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else if (guess !== secret) {
    if (score > 1) {
      document.querySelector('.message').textContent = 
      guess > secret ?'Too High!☝️':'Too Low!👇';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost!😭';
      displayMessage('You Lost!😭');
    }
  }

  
  // // When guess is too high
  // else if (guess > secret) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'Too High!☝️';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost!😭';
  //   }
  //   document.querySelector('.number').textContent = '?';

  //   // When guess is too low
  // } else if (guess < secret) {
  //   if (score > 0) {
  //     document.querySelector('.message').textContent = 'Too Low!👇';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You Lost!😭';
  //   }
  //   document.querySelector('.number').textContent = '?';
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secret = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  console.log(secret);
});