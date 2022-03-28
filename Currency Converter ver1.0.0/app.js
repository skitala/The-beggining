const API_KEY = 'c172ac9a02872e5f3d4ce578';
const fromCurrencyOption = document.getElementById('from');
const toCurrencyOption = document.getElementById('to');
const fromInput = document.getElementById('from-this');
const toInput = document.getElementById('to-this');

// const currencyNames = [];
// const currencies = [];

async function convert() {
  const firstCurrency = fromCurrencyOption.value;
  const secondCurrency = toCurrencyOption.value;
  const res = await fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${firstCurrency}`);

  const data = await res.json();
  const rates = data.conversion_rates[secondCurrency];
  // const { conversion_rates } = data;
  console.log(data);

  // currencyNames.push(Object.keys(conversion_rates));
  // currencies.push(Object.values(conversion_rates));
  // console.log(conversion_rates);
  toInput.value = (fromInput.value * rates).toFixed(2);

  // let options = Object.keys(conversion_rates)
  //   .map((currency) => `<option value="${currency}">${currency}</option>`)
  //   .join('\n');
}

fromCurrencyOption.addEventListener('change', convert);
fromInput.addEventListener('input', convert);
toCurrencyOption.addEventListener('change', convert);
toInput.addEventListener('input', convert);

convert();
