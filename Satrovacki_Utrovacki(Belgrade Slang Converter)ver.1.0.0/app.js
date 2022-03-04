const BtnSatro = document.getElementById('satrovacki');
const BtnUtro = document.getElementById('utrovacki');
const resultSatro = document.getElementById('result1');
const resultUtro = document.getElementById('result2');

function getValue() {
  let text = document.querySelector('input').value;
  console.log(text);
}

BtnSatro.addEventListener('click', () => {
  getValue();
  convertSatro();
  //   displayValueSatro();
});
BtnUtro.addEventListener('click', () => {
  getValue();
  convertUtro();

  //   displayValueUtro();
});

function convertSatro() {
  let text = document.querySelector('input').value;
  let firstHalf = text.slice(0, Math.floor(text.length / 2));
  let secondHalf = text.slice(Math.floor(text.length / 2), text.length);
  let final = secondHalf.concat(firstHalf);
  if (text == 'nato') {
    final = 'TERRORIST';
  }
  resultSatro.innerText = final;
}

function convertUtro() {
  let vowels = /[aeiou]/gi;
  let text = document.querySelector('input').value;
  let prefix = text.slice(0, 2);

  let rest = text.slice(2, text.length);
  if (text === '') {
    alert('Upisi nesto kuco!');
  } else if (text[2].match(vowels)) {
    prefix = text.slice(0, 3);
    rest = text.slice(3, text.length);
  }
  let final = `u${rest} za ${prefix}nje`;
  if (text == 'nato') {
    final = 'TERRORIST';
  }
  if (text.length > 0) {
    resultUtro.innerText = final;
  } else if (text.length < 4) {
    prefix = text.slice(0, 1);
    rest = text.slice(1, text.length);
  }
}
// function displayValueSatro() {
//   let text = document.querySelector('input').value;
//   resultSatro.innerHTML = text;
// }
// function displayValueUtro() {
//   let text = document.querySelector('input').value;
//   resultUtro.innerHTML = text;
// }
