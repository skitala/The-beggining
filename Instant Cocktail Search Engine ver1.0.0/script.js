let input = document.querySelector('input').value;
const cocktailCont = document.querySelector('.cocktail-container');
const cocktailName = document.querySelector('.cocktail-name');
const cocktailImage = document.querySelector('.cocktail-img');
const cocktailElements = document.querySelector('.ingredients');
const cocktailInstructions = document.querySelector('.instructions');
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.previous');
const inputName = document.getElementById('input');
const cocktail = new Cocktail(input);

const searchBtn = document.querySelector('.search-btn');
let i = 0;

inputName.addEventListener('input', () => {
  if (inputName.value === '') {
    searchBtn.disabled = true;
  }
});

function getCocktail() {
  // let i = 0;
  cocktail
    .getCocktail()
    .then((results) => {
      console.log(results.drinks);

      cocktailCont.innerHTML = `<h1 class="cocktail-name">${results.drinks[i].strDrink}</h1>
      <div class="cocktail-card"><div class="cocktail-img"><img src="${results.drinks[i].strDrinkThumb}" alt=""></div>
      <ul class="ingredients">
        <li class="ingredient">${results.drinks[i].strIngredient1}</li>
        <li class="ingredient">${results.drinks[i].strIngredient2}</li>
        <li class="ingredient">${results.drinks[i].strIngredient3}</li>
        <li class="ingredient">${results.drinks[i].strIngredient4}</li>
        <li class="ingredient">${results.drinks[i].strIngredient5}</li>
        <li class="ingredient">${results.drinks[i].strIngredient6}</li>


      </ul>
     </div>
      <div class="instructions">${results.drinks[i].strInstructions}</div>
      `;
      removeEmpty();
      function nextScroll() {
        nextBtn.addEventListener('click', () => {
          i++;
          cocktailCont.innerHTML = `<h1 class="cocktail-name">${results.drinks[i].strDrink}</h1>
        <div class="cocktail-card"><div class="cocktail-img"><img src="${results.drinks[i].strDrinkThumb}" alt=""></div>
        <ul class="ingredients">
          <li class="ingredient">${results.drinks[i].strIngredient1}</li>
          <li class="ingredient">${results.drinks[i].strIngredient2}</li>
          <li class="ingredient">${results.drinks[i].strIngredient3}</li>
          <li class="ingredient">${results.drinks[i].strIngredient4}</li>
          <li class="ingredient">${results.drinks[i].strIngredient5}</li>
          <li class="ingredient">${results.drinks[i].strIngredient6}</li>

        </ul>
       </div>
        <div class="instructions">${results.drinks[i].strInstructions}</div>
        `;
          if (i >= 1) {
            previousBtn.disabled = false;
            previousBtn.style.backgroundColor = 'crimson';
          }
          if (results.drinks.length - 1 === i) {
            nextBtn.disabled = true;
            nextBtn.style.backgroundColor = 'transparent';
          }

          console.log(i);

          removeEmpty();
        });
      }
      nextScroll();
      console.log(i);
      previousBtn.addEventListener('click', () => {
        i--;
        cocktailCont.innerHTML = `<h1 class="cocktail-name">${results.drinks[i].strDrink}</h1>
        <div class="cocktail-card"><div class="cocktail-img"><img src="${results.drinks[i].strDrinkThumb}" alt=""></div>
        <ul class="ingredients">
          <li class="ingredient">${results.drinks[i].strIngredient1}</li>
          <li class="ingredient">${results.drinks[i].strIngredient2}</li>
          <li class="ingredient">${results.drinks[i].strIngredient3}</li>
          <li class="ingredient">${results.drinks[i].strIngredient4}</li>
          <li class="ingredient">${results.drinks[i].strIngredient5}</li>
          <li class="ingredient">${results.drinks[i].strIngredient6}</li>
          <li class="ingredient">${results.drinks[i].strIngredient7}</li>

        </ul>
       </div>
        <div class="instructions">${results.drinks[i].strInstructions}</div>
        `;
        console.log(i);
        if (i < 1) {
          previousBtn.disabled = true;
          previousBtn.style.backgroundColor = 'transparent';
        } else {
          previousBtn.style.backgroundColor = 'crimson';
          previousBtn.disabled = false;
        }
        if (i < results.drinks.length - 1) {
          nextBtn.disabled = false;
          nextBtn.style.backgroundColor = 'crimson';
        }
        removeEmpty();
      });
    })
    .catch((err) => console.log(err));
  // searchNew();
}

function removeEmpty() {
  document.querySelectorAll('.ingredient').forEach((item) => {
    if (item.innerHTML === 'null' || item.innerHTML === '') {
      item.remove();
    }
  });
}
// let y = 0;

searchBtn.addEventListener('click', () => {
  // let y = 0;

  // y++;
  // i = 0;
  // console.log(y);
  // nextBtn.clicked == true ? i++ - 1 : '';
  let input = document.querySelector('input').value;

  cocktail.searchNew(input);
  getCocktail(input);
});
