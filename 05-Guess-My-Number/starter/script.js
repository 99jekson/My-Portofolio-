'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const score = 20;
const highscore = 0;
const displayMassage = function (massage) {
  document.querySelector('.massage').textContent = massage;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMassage('No number');
    // document.querySelector('.massage').textContent = 'No number';

    //When player wins
  } else if (guess === secretNumber) {
    displayMassage('Right number');
    // document.querySelector('.massage').textContent = 'Right number';

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('.body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When player wrongs
    else if (guess !== secretNumber) {
      if (score > 1) {
        displayMassage(guess > secretNumber ? 'Too high ☝️' : 'Too low 👇');
        // document.querySelector('.massage').textContent =
        //   guess > secretNumber ? 'Too high ☝️' : 'Too low 👇';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayMassage('You lost the game');
        // document.querySelector('.massage').textContent = 'You lost the game';
        document.querySelector('.score').textContent = 0;
      }
    }
  }

  //   //WHen guess is to high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.massage').textContent = 'Too Low 👇';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.massage').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   //When guess is to low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.massage').textContent = 'Too Low 👇';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = 'You lost the game';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMassage('Start guessing');
  // document.querySelector('.massage').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = ';';
  document.querySelector('.body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
