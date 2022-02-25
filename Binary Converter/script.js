const button = document.querySelector('.btn');
const binaryResult = document.getElementById('result');

function getInput() {
  let num = document.getElementById('number').value;
  console.log(num);
}
button.addEventListener('click', () => {
  getInput();
  binaryConvert();
  enter();
});
window.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    location.reload();
  }
});

function binaryConvert() {
  let binary = [];
  let result = [];
  let i = 0;
  let num = document.getElementById('number').value;

  while (num > 0) {
    binary[i] = num % 2;
    num = Math.floor(num / 2);
    i++;
  }
  for (let y = binary.length; y >= 0; y--) {
    result.push(binary[y]);
  }
  console.log(result.join(''));
  binaryResult.innerHTML = result.join('');
}

function enter() {
  button.innerHTML = 'Hit ENTER for new conversion';
}
