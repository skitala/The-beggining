class Cocktail {
  constructor(name) {
    this.name = name;
  }

  async getCocktail() {
    const result = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.name}
    `
    );
    const resData = await result.json();

    return resData;
  }

  searchNew(name) {
    this.name = name;
  }
}
