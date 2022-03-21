const fields = document.querySelectorAll('td');
const btnX = document.getElementById('x');
const btnO = document.getElementById('o');
const body = document.querySelector('body');
const btnCont = document.querySelector('btn-container');
let intervalSpeed = 1500;

function playerTurnO() {
  fields.forEach((fieldO) => {
    fieldO.addEventListener('click', () => {
      fieldO.textContent = '';
      fieldO.textContent += 'O';

      if (
        (fields[0].textContent.includes('O') &&
          fields[1].textContent.includes('O') &&
          fields[2].textContent.includes('O')) ||
        (fields[3].textContent.includes('O') &&
          fields[4].textContent.includes('O') &&
          fields[5].textContent.includes('O')) ||
        (fields[6].textContent.includes('O') &&
          fields[7].textContent.includes('O') &&
          fields[8].textContent.includes('O')) ||
        (fields[0].textContent.includes('O') &&
          fields[3].textContent.includes('O') &&
          fields[6].textContent.includes('O')) ||
        (fields[1].textContent.includes('O') &&
          fields[4].textContent.includes('O') &&
          fields[7].textContent.includes('O')) ||
        (fields[2].textContent.includes('O') &&
          fields[5].textContent.includes('O') &&
          fields[8].textContent.includes('O')) ||
        (fields[0].textContent.includes('O') &&
          fields[4].textContent.includes('O') &&
          fields[8].textContent.includes('O')) ||
        (fields[2].textContent.includes('O') &&
          fields[4].textContent.includes('O') &&
          fields[6].textContent.includes('O'))
      ) {
        let result = document.createElement('div');
        result.innerText = '';
        result.innerText += 'You Won';
        result.classList.add('player-result');
        body.appendChild(result);
        let reloadOnWin = setTimeout(() => {
          location.reload();
        }, 800);
      }
    });
  });
}

function playerTurnX() {
  fields.forEach((fieldX) => {
    fieldX.addEventListener('click', () => {
      fieldX.textContent = '';
      fieldX.textContent += 'X';

      if (
        (fields[0].textContent.includes('X') &&
          fields[1].textContent.includes('X') &&
          fields[2].textContent.includes('X')) ||
        (fields[3].textContent.includes('X') &&
          fields[4].textContent.includes('X') &&
          fields[5].textContent.includes('X')) ||
        (fields[6].textContent.includes('X') &&
          fields[7].textContent.includes('X') &&
          fields[8].textContent.includes('X')) ||
        (fields[0].textContent.includes('X') &&
          fields[3].textContent.includes('X') &&
          fields[6].textContent.includes('X')) ||
        (fields[1].textContent.includes('X') &&
          fields[4].textContent.includes('X') &&
          fields[7].textContent.includes('X')) ||
        (fields[2].textContent.includes('X') &&
          fields[5].textContent.includes('X') &&
          fields[8].textContent.includes('X')) ||
        (fields[0].textContent.includes('X') &&
          fields[4].textContent.includes('X') &&
          fields[8].textContent.includes('X')) ||
        (fields[2].textContent.includes('X') &&
          fields[4].textContent.includes('X') &&
          fields[6].textContent.includes('X'))
      ) {
        let result = document.createElement('div');
        result.innerText = '';
        result.innerText += 'You Won';
        result.classList.add('player-result');
        body.appendChild(result);
        let reloadOnWin = setTimeout(() => {
          location.reload();
        }, 800);
      }
    });
  });
}

function computerTurnX() {
  let randomFieldX = fields[Math.floor(Math.random() * fields.length)];

  // randomFieldX.textContent = '';
  randomFieldX.textContent += 'X';
  if (randomFieldX.textContent.includes('O')) {
    randomFieldX.textContent = 'O';
  } else if (randomFieldX.textContent.includes('X')) {
    randomFieldX.textContent = 'X';
  }
  // Should add interval speedup conditional if field is covered

  if (
    (fields[0].textContent.includes('X') &&
      fields[1].textContent.includes('X') &&
      fields[2].textContent.includes('X')) ||
    (fields[3].textContent.includes('X') &&
      fields[4].textContent.includes('X') &&
      fields[5].textContent.includes('X')) ||
    (fields[6].textContent.includes('X') &&
      fields[7].textContent.includes('X') &&
      fields[8].textContent.includes('X')) ||
    (fields[0].textContent.includes('X') &&
      fields[3].textContent.includes('X') &&
      fields[6].textContent.includes('X')) ||
    (fields[1].textContent.includes('X') &&
      fields[4].textContent.includes('X') &&
      fields[7].textContent.includes('X')) ||
    (fields[2].textContent.includes('X') &&
      fields[5].textContent.includes('X') &&
      fields[8].textContent.includes('X')) ||
    (fields[0].textContent.includes('X') &&
      fields[4].textContent.includes('X') &&
      fields[8].textContent.includes('X')) ||
    (fields[2].textContent.includes('X') && fields[4].textContent.includes('X') && fields[6].textContent.includes('X'))
  ) {
    let result = document.createElement('div');
    result.innerText = '';
    result.innerText += 'Computer Won';
    result.classList.add('player-result');
    body.appendChild(result);
    let reloadOnWin = setTimeout(() => {
      location.reload();
    }, 800);
  }
}

function computerTurnO() {
  let randomFieldO = fields[Math.floor(Math.random() * fields.length)];

  // randomFieldO.textContent = '';
  randomFieldO.textContent += 'O';

  if (randomFieldO.textContent.includes('X')) {
    randomFieldO.textContent = 'X';
    intervalSpeed = 500;
  } else if (randomFieldO.textContent.includes('O')) {
    randomFieldO.textContent = 'O';
    intervalSpeed = 500;
  }

  console.log(randomFieldO.textContent);
  if (
    (fields[0].textContent.includes('O') &&
      fields[1].textContent.includes('O') &&
      fields[2].textContent.includes('O')) ||
    (fields[3].textContent.includes('O') &&
      fields[4].textContent.includes('O') &&
      fields[5].textContent.includes('O')) ||
    (fields[6].textContent.includes('O') &&
      fields[7].textContent.includes('O') &&
      fields[8].textContent.includes('O')) ||
    (fields[0].textContent.includes('O') &&
      fields[3].textContent.includes('O') &&
      fields[6].textContent.includes('O')) ||
    (fields[1].textContent.includes('O') &&
      fields[4].textContent.includes('O') &&
      fields[7].textContent.includes('O')) ||
    (fields[2].textContent.includes('O') &&
      fields[5].textContent.includes('O') &&
      fields[8].textContent.includes('O')) ||
    (fields[0].textContent.includes('O') &&
      fields[4].textContent.includes('O') &&
      fields[8].textContent.includes('O')) ||
    (fields[2].textContent.includes('O') && fields[4].textContent.includes('O') && fields[6].textContent.includes('O'))
  ) {
    let result = document.createElement('div');
    result.innerText = '';
    result.innerText += 'Computer Won';
    result.classList.add('player-result');
    body.appendChild(result);
    let reloadOnWin = setTimeout(() => {
      location.reload();
    }, 800);
  }
}

btnO.addEventListener('click', () => {
  playerTurnO();
  let compPlayIntervalX = setInterval(() => {
    computerTurnX();
  }, intervalSpeed);

  function stopCompX() {
    clearInterval(compPlayIntervalX);
  }
});
btnX.addEventListener('click', () => {
  playerTurnX();
  let compPlayIntervalO = setInterval(() => {
    computerTurnO();
  }, intervalSpeed);
  function stopCompO() {
    clearInterval(compPlayIntervalO);
  }
});
