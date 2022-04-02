const textEl = document.getElementById('text');
const text =
  "Hello there, I am Nikola, Junior Front-end Developer from Serbia. Although I started this journey few months ago, I acquired quite a bit of knowledge and skill needed for building projects that are pragmatic and user-friendly. At this moment, HTML, CSS and vanilla JavaScript are technologies which I am confident in. React is my next learning focus, therefore I'll need a few weeks of practice before it gets into my skin.If my skillset matches your vision and line of work, feel free to contact me on my Facebook or Linkedin page.";
const heroImg = document.querySelector('img');
const diceGameContainer = document.querySelector('.dice-game');
let speedEl = 30;
let index = 0;

function writeText() {
  textEl.textContent = text.slice(0, index);
  textEl.style.transform = 'scale(1.2)';
  index++;
  // const blur = 53 - text.length / 1000;
  const blur = 0;

  if (index === text.length) {
    return text, (heroImg.style.filter = `blur(${blur}px)`), (diceGameContainer.style.filter = `blur(${blur})`);
  }

  console.log(text.length);
  setTimeout(writeText, speedEl);
}

writeText();

const clock = document.querySelector('.clock');
const refresh = 1000;
function clockTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  let time = `${hours}:${minutes}:${seconds}`;

  return time;
}
setInterval(function () {
  clock.innerHTML = clockTime();
}, refresh);

const diceBtn = document.querySelector('.dice-btn');
const diceResult = document.querySelector('.result');
const diceImg = document.querySelector('.dice-img');
const gameText = document.querySelector('.game-rule');
let rotate = 1440;

diceBtn.addEventListener('click', () => {
  function rollDice() {
    diceImg.style = `transform: rotate(${rotate}deg)`;
    rotate += 1440;
  }

  function diceGame() {
    let diceRange = 6;
    let result = Math.floor(Math.random() * diceRange + 1);
    diceResult.innerHTML = `${result}`;
    if (result > 1) {
      diceResult.innerHTML = `${result}, you know the rules.`;
    } else if (result === 1) {
      diceResult.innerHTML = `${result}, try again!`;
    }
  }
  setTimeout(() => {
    diceGame();
  }, 2000);
  rollDice();
});

const colorBtn = document.getElementById('toggle');
const html = document.querySelector('html');
const body = document.querySelector('body');

function toggle() {
  const paragraph = document.querySelector('p');
  if (html.classList.contains('dark')) {
    html.classList.remove('dark');
    body.classList.remove('dark');
    clock.classList.remove('dark');
    diceResult.classList.remove('dark');
    gameText.classList.remove('dark');
    paragraph.style.color = '#fff';
    colorBtn.classList.toggle('dark');
    colorBtn.style.color = '#1d1d1d';
  } else {
    html.classList.add('dark');
    body.classList.add('dark');
    clock.classList.add('dark');
    diceResult.classList.add('dark');
    gameText.classList.add('dark');
    paragraph.style.color = '#1d1d1d';
    colorBtn.classList.remove('dark');
    colorBtn.style.color = '#fff';
  }
}

colorBtn.addEventListener('click', toggle);
