const result = document.getElementById('password');
const generateBtn = document.querySelector('.generate-btn');
const copyBtn = document.querySelector('.copy-btn');
const resultCont = document.querySelector('.result');

const letters = ['qwertyuiopasdfghjklzxcvbnm'];
const upperCase = letters.map((char) => char.toUpperCase());
const numbers = ['0123456789'];
const symbols = ['!@#$%^&*()_+}{|":?><|~`'];

const passwordEls = letters.concat(numbers, symbols, upperCase).join('').split('');
console.log(passwordEls);

const generateRandom = () => {
  let randomPass = passwordEls[Math.floor(Math.random() * passwordEls.length)];

  return randomPass;
};
function createRandom() {
  let res = '';
  let lengthInput = +document.querySelector('.length').value;

  let length = res.length;

  while (length <= lengthInput - 1) {
    res += generateRandom();
    length++;
    if (length === lengthInput) {
      break;
    }
  }
  console.log(res);

  result.innerHTML = res;
  resultCont.style.backgroundColor = 'black';
}
// generateRandom();
generateBtn.addEventListener('click', () => {
  generateRandom();
  setTimeout(() => {
    createRandom();
  }, 1000);
});

copyBtn.addEventListener('click', copyPassword);

function copyPassword() {
  let copyPassword = document.getElementById('password');
  let textArea = document.createElement('textarea');
  textArea.value = copyPassword.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('Copy');
  textArea.remove();
  alert('Password copied to clipboard!');
}
