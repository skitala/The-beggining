const archive = new Archive();
const articlesContainer = document.querySelector('.articles');
const yearSearch = document.querySelector('.year');
const monthSearch = document.querySelector('.month');
const articleNum = document.querySelector('.article-num');
const searchBtn = document.querySelector('.search');

// let loop;

// const articlesLoop = () => {
//   for (let i = 0; i < 10; i++) {
//     loop = i;
//   }
// };
// articlesLoop();
// console.log(loop);

function getArchive() {
  let article = document.querySelector('.article-num').value;

  archive
    .getArchive()
    .then((result) => {
      console.log(result);
      // articlesContainer.innerHTML += result.response.docs[loop].headline.main;
      // articlesContainer.innerHTML += result.response.docs[1].headline.main;
      articlesContainer.innerHTML += `<li>${result.response.docs[article].headline.main}, Link to full article: <a href="${result.response.docs[article].web_url}" target="_blank">${result.response.docs[article].web_url}</a></li>
      <br>
      <hr>`;
    })
    .catch((err) => console.log(err));
}

searchBtn.addEventListener('click', () => {
  let yearInput = document.querySelector('.year').value;
  let monthInput = document.querySelector('.month').value;
  archive.changeDate(yearInput, monthInput);
  getArchive();
});

// getArchive();
