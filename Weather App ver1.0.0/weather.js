const API_KEY = '6baba265ab0f79790225bf5848b072ab';

class Weather {
  constructor(city) {
    this.city = city;
  }

  async getWeather() {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${API_KEY}`);

    const resData = await res.json();

    return resData;
  }

  changeLocation(city) {
    this.city = city;
  }
}
