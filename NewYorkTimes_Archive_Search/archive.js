const API_KEY = 'OurHqfvH0Oqb0Zyq0jBN4hg94uROkLm4';

class Archive {
  constructor(year, month) {
    this.year = year;
    this.month = month;
  }

  async getArchive() {
    const response = await fetch(`https://api.nytimes.com/svc/archive/v1/${this.year}/${this.month}.json?api-key=${API_KEY}`);

    const data = await response.json();

    return data;
  }

  changeDate(year, month) {
    this.year = year;
    this.month = month;
  }
}
