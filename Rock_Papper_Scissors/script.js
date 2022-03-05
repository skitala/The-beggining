const result = document.querySelector('.result');
const buttons = document.querySelectorAll('button');
const computer = document.querySelector('.computer');
const player = document.querySelector('.player');
const score = document.querySelector('.score');

const elements = ['Rock', 'Paper', 'Scissors'];
let compResult = 0;
let playerResult = 0;

buttons.forEach((button) =>
  button.addEventListener('click', function game() {
    let element = elements[Math.floor(Math.random() * elements.length)];

    function show() {
      computer.innerHTML += ' ' + element;
      player.textContent += ' ' + button.id;
    }
    show();

    if (element === button.id) {
      result.innerHTML = 'DRAW';
    } else if (element === 'Rock' && button.id === 'Paper') {
      result.innerHTML = 'PLAYER WINS';

      playerResult++;

      score.innerHTML = `Machine:${compResult} Human:${playerResult}`;
    } else if (element === 'Rock' && button.id === 'Scissors') {
      result.innerHTML = 'COMPUTER WINS';

      compResult++;
      score.innerHTML = `Machine:${compResult} Human:${playerResult}`;
    } else if (element === 'Paper' && button.id === 'Rock') {
      result.innerHTML = 'COMPUTER WINS';

      compResult++;
      score.innerHTML = `Machine:${compResult} Human:${playerResult}`;
    } else if (element === 'Paper' && button.id === 'Scissors') {
      result.innerHTML = 'PLAYER WINS';

      playerResult++;
      score.innerHTML = `Machine:${compResult} Human:${playerResult}`;
    } else if (element === 'Scissors' && button.id === 'Rock') {
      result.innerHTML = 'PLAYER WINS';

      playerResult++;
      score.innerHTML = `Machine:${compResult} Human:${playerResult}`;
    } else if (element === 'Scissors' && button.id === 'Paper') {
      result.innerHTML = 'COMPUTER WINS';

      compResult++;
      score.innerHTML = `Machine:${compResult} Human:${playerResult}`;
    }
    if (computer.textContent.split(' ').length > 1) {
      computer.innerHTML = element;
      player.innerHTML = button.id;
    }
  })
);
