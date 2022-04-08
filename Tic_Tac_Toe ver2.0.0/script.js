const fields = document.querySelectorAll('td');
const btnX = document.getElementById('x');
const btnO = document.getElementById('o');
const body = document.querySelector('body');
const btnCont = document.querySelector('btn-container');
const darkBtn = document.querySelector('.dark');
const lightBtn = document.querySelector('.light');
const allBtns = document.querySelectorAll('button');

let playerWon = false;
let computerWon = false;

let fieldsArr = [...fields];
let fieldsLeft = [];

function clearFields() {
  fieldsArr.map((field) => (field.innerHTML = ''));
  let result = document.querySelector('.player-result');
  body.removeChild(result);
}

darkBtn.addEventListener('click', () => {
  body.style.backgroundColor = '#1d1d1d';
  fields.forEach((field) => {
    field.style.backgroundColor = 'aqua';
  });
  allBtns.forEach((button) => {
    button.style.boxShadow = '1px 1px 10px 3px aqua';
  });
});

lightBtn.addEventListener('click', () => {
  body.style.backgroundColor = 'crimson';
  fields.forEach((field) => {
    field.style.backgroundColor = '#fff';
  });
  allBtns.forEach((button) => {
    button.style.boxShadow = '1px 1px 10px 3px #fff';
  });
});

btnX.addEventListener('click', () => {
  console.log('clicked');
  fields.forEach((fieldX) => {
    fieldX.addEventListener('click', () => {
      fieldX.innerHTML = 'X';
      let emptyFields = fieldsArr.filter((field) => field.innerHTML === '');

      fieldsLeft.push(emptyFields);
      fieldsLeft = fieldsLeft.pop();
      const lolO = setTimeout(() => {
        computerO();
      }, 1000);

      if ((fields[0].innerHTML.includes('X') && fields[1].innerHTML.includes('X') && fields[2].innerHTML.includes('X')) || (fields[3].innerHTML.includes('X') && fields[4].innerHTML.includes('X') && fields[5].innerHTML.includes('X')) || (fields[6].innerHTML.includes('X') && fields[7].innerHTML.includes('X') && fields[8].innerHTML.includes('X')) || (fields[0].innerHTML.includes('X') && fields[3].innerHTML.includes('X') && fields[6].innerHTML.includes('X')) || (fields[1].innerHTML.includes('X') && fields[4].innerHTML.includes('X') && fields[7].innerHTML.includes('X')) || (fields[2].innerHTML.includes('X') && fields[5].innerHTML.includes('X') && fields[8].innerHTML.includes('X')) || (fields[0].innerHTML.includes('X') && fields[4].innerHTML.includes('X') && fields[8].innerHTML.includes('X')) || (fields[2].innerHTML.includes('X') && fields[4].innerHTML.includes('X') && fields[6].innerHTML.includes('X'))) {
        // alert('You Won');
        let result = document.createElement('div');
        result.innerText = '';
        result.innerText += 'You Won';
        result.classList.add('player-result');
        body.appendChild(result);
        clearTimeout(lolO);
        setTimeout(() => {
          clearFields();
        }, 1000);
      }
      console.log(fieldsLeft);
    });
  });
});
btnO.addEventListener('click', () => {
  body.style.backgroundColor = 'crimson';
  fields.forEach((field) => {
    field.style.backgroundColor = '#fff';
  });
  fields.forEach((fieldO) => {
    fieldO.addEventListener('click', () => {
      fieldO.innerHTML = 'O';
      let emptyFields = fieldsArr.filter((field) => field.innerHTML === '');

      fieldsLeft.push(emptyFields);
      fieldsLeft = fieldsLeft.pop();
      const lolX = setTimeout(() => {
        computerX();
      }, 1000);

      if ((fields[0].innerHTML.includes('O') && fields[1].innerHTML.includes('O') && fields[2].innerHTML.includes('O')) || (fields[3].innerHTML.includes('O') && fields[4].innerHTML.includes('O') && fields[5].innerHTML.includes('O')) || (fields[6].innerHTML.includes('O') && fields[7].innerHTML.includes('O') && fields[8].innerHTML.includes('O')) || (fields[0].innerHTML.includes('O') && fields[3].innerHTML.includes('O') && fields[6].innerHTML.includes('O')) || (fields[1].innerHTML.includes('O') && fields[4].innerHTML.includes('O') && fields[7].innerHTML.includes('O')) || (fields[2].innerHTML.includes('O') && fields[5].innerHTML.includes('O') && fields[8].innerHTML.includes('O')) || (fields[0].innerHTML.includes('O') && fields[4].innerHTML.includes('O') && fields[8].innerHTML.includes('O')) || (fields[2].innerHTML.includes('O') && fields[4].innerHTML.includes('O') && fields[6].innerHTML.includes('O'))) {
        // alert('You Won');
        let result = document.createElement('div');
        result.innerText = '';
        result.innerText += 'You Won';
        result.classList.add('player-result');
        body.appendChild(result);
        clearTimeout(lolX);
        setTimeout(() => {
          clearFields();
        }, 1000);
      }
      console.log(fieldsLeft);
    });
  });
});

const computerO = function turnO() {
  let randomField = fieldsLeft[Math.floor(Math.random() * fieldsLeft.length)];
  randomField.innerHTML = 'O';
  if ((fields[0].innerHTML.includes('O') && fields[1].innerHTML.includes('O') && fields[2].innerHTML.includes('O')) || (fields[3].innerHTML.includes('O') && fields[4].innerHTML.includes('O') && fields[5].innerHTML.includes('O')) || (fields[6].innerHTML.includes('O') && fields[7].innerHTML.includes('O') && fields[8].innerHTML.includes('O')) || (fields[0].innerHTML.includes('O') && fields[3].innerHTML.includes('O') && fields[6].innerHTML.includes('O')) || (fields[1].innerHTML.includes('O') && fields[4].innerHTML.includes('O') && fields[7].innerHTML.includes('O')) || (fields[2].innerHTML.includes('O') && fields[5].innerHTML.includes('O') && fields[8].innerHTML.includes('O')) || (fields[0].innerHTML.includes('O') && fields[4].innerHTML.includes('O') && fields[8].innerHTML.includes('O')) || (fields[2].innerHTML.includes('O') && fields[4].innerHTML.includes('O') && fields[6].innerHTML.includes('O'))) {
    // alert('Computer Won');
    let result = document.createElement('div');
    result.innerText = '';
    result.innerText += 'Computer Won';
    result.classList.add('player-result');
    body.appendChild(result);
    setTimeout(() => {
      clearFields();
    }, 1000);
  }
};
const computerX = function turnX() {
  let randomField = fieldsLeft[Math.floor(Math.random() * fieldsLeft.length)];
  randomField.innerHTML = 'X';
  if ((fields[0].innerHTML.includes('X') && fields[1].innerHTML.includes('X') && fields[2].innerHTML.includes('X')) || (fields[3].innerHTML.includes('X') && fields[4].innerHTML.includes('X') && fields[5].innerHTML.includes('X')) || (fields[6].innerHTML.includes('X') && fields[7].innerHTML.includes('X') && fields[8].innerHTML.includes('X')) || (fields[0].innerHTML.includes('X') && fields[3].innerHTML.includes('X') && fields[6].innerHTML.includes('X')) || (fields[1].innerHTML.includes('X') && fields[4].innerHTML.includes('X') && fields[7].innerHTML.includes('X')) || (fields[2].innerHTML.includes('X') && fields[5].innerHTML.includes('X') && fields[8].innerHTML.includes('X')) || (fields[0].innerHTML.includes('X') && fields[4].innerHTML.includes('X') && fields[8].innerHTML.includes('X')) || (fields[2].innerHTML.includes('X') && fields[4].innerHTML.includes('X') && fields[6].innerHTML.includes('X'))) {
    // alert('Computer Won');
    let result = document.createElement('div');
    result.innerText = '';
    result.innerText += 'Computer Won';
    result.classList.add('player-result');
    body.appendChild(result);
    setTimeout(() => {
      clearFields();
    }, 1000);
  }
};
