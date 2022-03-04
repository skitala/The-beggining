const wind = document.querySelector('.square');
const water = document.querySelector('.circle');
const fire = document.querySelector('.triangle');
const earth = document.querySelector('.square2');
const button = document.querySelector('.aperion');
const time = 1000;
let startCount = 0;
let backCount = 90;
let windCount = 0;
function moveWind() {
  windCount += 10;
  wind.style.left = windCount + 'vw';
  if (windCount === backCount) {
    windCount -= 90;
  } else if (windCount === startCount) {
    windCount += 9;
  }
}
let startCount1 = 90;
let backCount1 = 0;
let earthCount = 90;
function moveEarth() {
  earthCount -= 10;
  earth.style.left = earthCount + 'vw';
  if (earthCount === backCount1) {
    earthCount += 90;
  } else if (earthCount > startCount1) {
    earthCount -= 10;
  }
}

let startCount2 = 0;
let backCount2 = 80;
let waterCount = 0;

function moveWater() {
  waterCount += 9;
  water.style.top = waterCount + 'vh';

  if (waterCount >= backCount2) {
    waterCount -= 81;
  }
}

let startCount3 = 81;
let backCount3 = 0;
let fireCount = 81;

function moveFire() {
  fireCount -= 9;
  fire.style.top = fireCount + 'vh';
  console.log(fireCount);
  if (fireCount <= -backCount3) {
    fireCount += 81;
  }
}

button.addEventListener('click', () => {
  fire.style.transform = 'rotate(360deg)';
  wind.style.transform = 'rotate(360deg)';
  earth.style.transform = 'rotate(360deg)';
  water.style.transform = 'matrix(1,2,3,2,3,3)';
});
button.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  fire.style.transform = 'rotate(-360deg)';
  wind.style.transform = 'rotate(-360deg)';
  earth.style.transform = 'rotate(-360deg)';
  water.style.transform = '';
});

const windMove = setInterval(moveWind, time);
const waterMove = setInterval(moveWater, time);
const fireMove = setInterval(moveFire, time);
const earthMove = setInterval(moveEarth, time);
