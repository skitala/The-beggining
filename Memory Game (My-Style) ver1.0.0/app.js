const startBtn = document.querySelector('.start');
const randomEls = document.getElementById('random-element');
const rememberedInput = document.querySelector('.remembered-elements');
const nums = [];
const gameContainer = document.querySelector('.game-container');
const attemptsLeft = document.querySelector('.attempts');
window.addEventListener('DOMContentLoaded', () => {
  gameContainer.style.transform = 'translateY(0%)';
});

const numRange = () => {
  const range = 100;
  for (let i = 0; i < range; i++) {
    nums.push(i);
  }
};
numRange();
// console.log(nums);
const words = ['dimension', 'commemorate', 'shed', 'expect', 'tower', 'bike', 'soap', 'great', 'brilliance', 'shiver', 'abortion', 'origin', 'spontaneous', 'core', 'friendly', 'up', 'advice', 'provoke', 'thin', 'rape', 'memorandum', 'pillow', 'bold', 'equation', 'cheap', 'tumble', 'grind', 'whip', 'principle', 'belt', 'humanity', 'radio', 'sour', 'transparent', 'rare', 'west', 'escape', 'address', 'examination', 'glasses', 'stain', 'kill', 'monster', 'hesitate', 'racism', 'prince', 'money', 'reasonable', 'allow', 'qualify', 'last', 'blade', 'feast', 'lecture', 'unique', 'criticism', 'attic', 'nail', 'wire', 'tip', 'ostracize', 'shower', 'perception', 'crown', 'bolt', 'motivation', 'form', 'utter', 'digress', 'provide', 'voice', 'drift', 'negotiation', 'television', 'compose', 'locate', 'remain', 'professional', 'hotdog', 'bell', 'software', 'correspond', 'horn', 'worth', 'stain', 'engineer', 'gallon', 'pray', 'twist', 'council', 'go', 'remunerate', 'integrated', 'war', 'residence', 'march', 'staff', 'shrink', 'pass', 'atmosphere'];

const elements = nums.concat(words);
console.log(elements);

const randoms = [];
const progressBar = document.querySelector('.progress');
const circle = document.querySelectorAll('.circle');

startBtn.addEventListener('click', () => {
  let times = 0;
  const randomThings = setInterval(function () {
    times++;
    let random = elements[Math.floor(Math.random() * elements.length)];
    //   console.log(random);
    randomEls.innerHTML = '';
    randomEls.innerHTML += `${random}`;
    randoms.push(random);
    rememberedInput.disabled = true;
    if (times === 11) {
      clearInterval(randomThings);
      randomEls.innerHTML = '';
      rememberedInput.disabled = false;
    }

    // console.log(randoms);
  }, 1000);
});
let count = 15;
let inputs = [];
const submitBtn = document.querySelector('.submit').addEventListener('click', () => {
  let progressFill = 10;

  let input = rememberedInput.value;
  let randomsArr = randoms.map((el) => {
    return el.toString();
  });

  inputs.push(input);

  let duplicateCheck = inputs.map((el) => {
    return el.indexOf(input);
  });

  let progressWidth = progressBar.offsetWidth / 10;

  if (randomsArr.includes(input)) {
    console.log('Good!');
    // console.log(progressWidth);
    progressBar.style.width = `${progressWidth + progressFill}%`;
    if (progressWidth > 86) {
      progressBar.style.width = '100%';
      alert('You won! Great memory mate!');
      location.reload();
    } else if (duplicateCheck[0] === duplicateCheck[1]) {
      alert('No Duplicates Cheater. Game Over!');
      progressBar.style.width = `${progressWidth}%`;
      location.reload();
    }
  }
  console.log(inputs);

  console.log(duplicateCheck);

  count--;
  if (count === 0) {
    alert('Game Over');
    location.reload();
  } else if (count > 0) {
    startBtn.disabled = true;
  }

  attemptsLeft.innerHTML = `Attempts Left: ${count}`;
});

// rememberedInput.addEventListener('input', () => {
//   //   let tries = 0;
//   //   console.log(rememberedInput.value);
//   //   let randomsArr = randoms.map((el) => {
//   //     return el.toString();
//   //   });
//   //   console.log(randoms.toString());
//   //   console.log(randomsArr);
//   //   let progressFill = 11;
//   //   if (randomsArr.includes(rememberedInput.value)) {
//   //     // tries++;
//   //     console.log('Good!');
//   //     progressBar.style.width += `${progressFill}%`;
//   //     progressFill += 11;
//   //   } else {
//   //     progressBar.style.width -= `0%`;
//   //   }
// });
