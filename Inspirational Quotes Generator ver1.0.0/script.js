const api_url = 'https://type.fit/api/quotes';
const quoteContainer = document.querySelector('.quote-container');
const generateBtn = document.getElementById('generate-btn');
const insert = document.getElementById('insert');
const insertAuthor = document.getElementById('insertAuthor');

async function getQuotes() {
  const response = await fetch(api_url);

  const results = await response.json();

  let randomQuote = results[Math.floor(Math.random() * results.length)];
  console.log(results);

  insert.textContent = '';
  insertAuthor.textContent = '';
  if (randomQuote.author === null) {
    insert.textContent += `Quote of the day: ${randomQuote.text}`;
    insertAuthor.textContent += `Author: ${(randomQuote.author = 'Unknown')}`;
  } else {
    insert.textContent += `Quote of the day: ${randomQuote.text}`;
    insertAuthor.textContent += `Author: ${randomQuote.author}`;
  }
}

generateBtn.addEventListener('click', () => {
  getQuotes();
});
