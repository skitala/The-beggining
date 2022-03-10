const clock = document.getElementById('clock');

const refreshRate = 1000;

function getTime() {
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
getTime();
setInterval(function () {
  clock.innerHTML = getTime();
}, refreshRate);
