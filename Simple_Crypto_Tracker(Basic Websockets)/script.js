let stockPriceElXrp = document.querySelector('.stock-price-xrp.hide');
let stockPriceElBtc = document.querySelector('.stock-price-btc.hide');
let stockPriceElBnb = document.querySelector('.stock-price-bnb.hide');
let stockPriceElEth = document.querySelector('.stock-price-eth.hide');

function etherium() {
  let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade');

  let lastPrice = null;

  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElEth.innerText = `Etherium: ${parseFloat(stockObject.p).toFixed(2)} EUR/COIN`;

    stockPriceElEth.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'crimson';

    lastPrice = price;
  };
}

function bitcoin() {
  let ws = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade');

  let lastPrice = null;

  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElBtc.innerText = `Bitcoin: ${parseFloat(stockObject.p).toFixed(2)} EUR/COIN`;

    stockPriceElBtc.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'crimson';

    lastPrice = price;
  };
}

function binance() {
  let ws = new WebSocket('wss://stream.binance.com:9443/ws/bnbeur@trade');

  let lastPrice = null;

  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElBnb.innerText = `Binance: ${parseFloat(stockObject.p).toFixed(2)} EUR/COIN`;

    stockPriceElBnb.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'crimson';

    lastPrice = price;
  };
}

function xrp() {
  let ws = new WebSocket('wss://stream.binance.com:9443/ws/xrpeur@trade');

  let lastPrice = null;

  ws.onmessage = (event) => {
    let stockObject = JSON.parse(event.data);
    let price = parseFloat(stockObject.p).toFixed(2);
    stockPriceElXrp.innerText = `XRP: ${parseFloat(stockObject.p).toFixed(2)} EUR/COIN`;

    stockPriceElXrp.style.color = !lastPrice || lastPrice === price ? 'black' : price > lastPrice ? 'green' : 'crimson';

    lastPrice = price;
  };
}

const ethBtn = document.querySelector('.eth-btn');
const btcBtn = document.querySelector('.btc-btn');
const binBtn = document.querySelector('.bin-btn');
const xrpBtn = document.querySelector('.xrp-btn');

ethBtn.addEventListener('click', () => {
  stockPriceElEth.classList.toggle('hide');
});
btcBtn.addEventListener('click', () => {
  stockPriceElBtc.classList.toggle('hide');
});
binBtn.addEventListener('click', () => {
  stockPriceElBnb.classList.toggle('hide');
});
xrpBtn.addEventListener('click', () => {
  stockPriceElXrp.classList.toggle('hide');
});

xrp();
binance();
etherium();
bitcoin();
