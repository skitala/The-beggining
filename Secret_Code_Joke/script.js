const pressed = [];
const secretCode = 'skuff';
const body = document.querySelector('body');
const text = "You've been hacked. Prepare money for file decryption. I shall call you in 30 minutes. Noob.";
let speed = 50;
let index = 0;

function hack() {
  const textEl = document.querySelector('h1');
  textEl.classList.add('hack');
  textEl.textContent = text.slice(0, index);
  index++;

  if (index === text.length) {
    text;
  }

  setTimeout(hack, speed);
}

window.addEventListener('keyup', (e) => {
  console.log(e.key);
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
  console.log(pressed);

  if (pressed.join('').includes(secretCode)) {
    body.classList.add('secret');
    body.innerHTML = `<h1 class="hack">
    ${hack()}
  </h1>`;
  }
});
