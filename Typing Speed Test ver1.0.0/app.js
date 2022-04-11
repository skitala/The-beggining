const textsArr = [
  ['Push yourself, because no one else is going to do it for you.', 'Failure is the condiment that gives success its flavor.', 'Wake up with determination. Go to bed with satisfaction.', "It's going to be hard, but hard does not mean impossible.", 'Learning never exhausts the mind.', 'The only way to do great work is to love what you do.'],
  ['Be courageous. Challenge orthodoxy. Stand up for what you believe in. When you are in your rocking chair talking to your grandchildren many years from now, be sure you have a good story to tell.', 'You make a choice: continue living your life feeling muddled in this abyss of self-misunderstanding, or you find your identity independent of it. You draw your own box.', 'It is during our darkest moments that we must focus to see the light.', 'Believe you can and youre halfway there.'],
  ['Everyone has inside of him a piece of good news. The good news is that you dont know how great you can be! How much you can love! What you can accomplish! And what your potential is!', 'Life is like riding a bicycle. To keep your balance, you must keep moving.', 'Dreams dont have to just be dreams. You can make it a reality; if you just keep pushing and keep trying, then eventually youll reach your goal. And if that takes a few years, then thats great, but if it takes 10 or 20, then thats part of the process.'],
  ['You must find the place inside yourself where nothing is impossible.', 'In a gentle way, you can shake the world.', 'Im not going to continue knocking that old door that doesnt open for me. Im going to create my own door and walk through that.', 'People tell you the world looks a certain way. Parents tell you how to think. Schools tell you how to think. TV. Religion. And then at a certain point, if youre lucky, you realize you can make up your own mind. Nobody sets the rules but you. You can design your own life.'],
];
const startTest = document.querySelector('.test-text');
const replay = document.querySelector('.test-again');
const timeLeft = document.querySelector('.time-left');
const input = document.querySelector('.input-text');
const error = document.querySelector('.err');
const wordsResult = document.querySelector('.wpm');
const charsResult = document.querySelector('.cpm');
const accuracyResult = document.querySelector('.acc');
const header = document.querySelector('h1');
const text = 'Typing Speed Test!';
let time = 60;
let err = 0;

let index = 0;
function headerTyping() {
  header.textContent = text.slice(0, index);

  index++;
  if (text.length === index - 1) {
    return text;
  }
  console.log(header);
  setTimeout(headerTyping, 100);
}
headerTyping();
const startTimer = () => {
  const timerCont = document.querySelector('.timer');
  const errCont = document.querySelector('.errors');
  const wpmCont = document.querySelector('.words-per-minute');
  const cpmCont = document.querySelector('.char-per-minute');
  const accCont = document.querySelector('.accuracy');

  time--;
  timeLeft.innerHTML = time;
  timerCont.classList.add('active');
  errCont.classList.add('active');
  wpmCont.classList.add('active');
  cpmCont.classList.add('active');
  accCont.classList.add('active');

  // console.log(time);
  if (time <= 0) {
    return (time = 1), (input.disabled = true);
  }
};

function errors() {
  if (startTest.innerHTML.includes(input.value)) return;
  else {
    err++;
    error.innerHTML = err;
  }
}
console.log(err);

function wordsPerMin() {
  let wpm = input.value.split(' ').length;
  wordsResult.innerHTML = wpm;
  console.log(wpm);
}

function charsPerMin() {
  let cpm = input.value.split('').length;
  charsResult.innerHTML = cpm;
  console.log(cpm);
}

function accuracy() {
  let accuracy = (((input.value.split('').length - err) / input.value.split('').length) * 100).toFixed(2);
  // accuracy < 0.0 ? 0.0 : accuracy;
  const testCont = document.querySelector('.test-container');

  if (accuracy < 70) {
    testCont.style.backgroundColor = 'crimson';
  } else {
    testCont.style.backgroundColor = 'rgb(29, 158, 79)';
  }
  accuracyResult.innerHTML = `${accuracy}%`;
  console.log(accuracy);
}

startTest.addEventListener('click', () => {
  setInterval(() => {
    startTimer();
  }, 1000);

  startTest.innerHTML = textsArr[Math.floor(Math.random() * textsArr.length)].join('');
});
input.addEventListener('input', () => {
  errors();
  wordsPerMin();
  charsPerMin();
  accuracy();
});
replay.addEventListener('click', () => {
  location.reload();
});
