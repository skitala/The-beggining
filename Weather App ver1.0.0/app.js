const weather = new Weather();
let input = document.querySelector('.input').value;
const changeLocationBtn = document.getElementById('btn');
const weatherContainer = document.querySelectorAll('.property-field.hide');
function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results);
      weatherContainer[0].innerHTML = `City: ${results.name}, Country: ${results.sys.country}, ${results.weather[0].main}`;
      weatherContainer[1].innerHTML = `Temperature: ${Math.round(results.main.temp - 270)}°C`;
      weatherContainer[2].innerHTML = `Humidity: ${results.main.humidity}%`;
      weatherContainer[3].innerHTML = `Pressure: ${results.main.pressure}mb`;
      weatherContainer[4].innerHTML = `Wind Speed: ${results.wind.speed}`;
      weatherContainer[5].innerHTML = `Minimal Temperature: ${Math.round(results.main.temp_min - 270)}°C`;
      weatherContainer[6].innerHTML = `Maximal Temperature: ${Math.round(results.main.temp_max - 270)}°C`;
    })
    .catch((err) => console.log(err));
}
changeLocationBtn.addEventListener('click', () => {
  let input = document.querySelector('.input').value;
  weather.changeLocation(input);
  weatherContainer.forEach((li) => {
    li.classList.toggle('hide');
  });
  getWeather();
  if (input === '') {
    weatherContainer.innerHTML = '';
  }
});
