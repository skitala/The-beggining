const numButton = document.querySelectorAll('.btn');
const outputEl = document.querySelector('.output');
const clearAllBtn = document.querySelector('.clear-all');
const equalsBtn = document.querySelector('.equals');
const deleteBtn = document.querySelector('.delete');

numButton.forEach((button) => {
  button.addEventListener('click', function calculator() {
    let sqrtIndex = outputEl.textContent.indexOf('√');
    function getValue() {
      outputEl.textContent += `${button.id}`;
    }
    getValue();

    function squareRoot() {
      let afterSqrt = outputEl.textContent.slice(1, outputEl.textContent.length);
      let resultSqrt = Math.sqrt(afterSqrt);
      if (resultSqrt - Math.floor(resultSqrt) !== 0) {
        outputEl.innerHTML = resultSqrt.toFixed(3);
      } else {
        outputEl.innerHTML = resultSqrt;
      }
    }

    function divide() {
      let divideIndex = outputEl.textContent.indexOf('/');
      let beforeDivide = outputEl.textContent.slice(0, divideIndex);
      let afterDivide = outputEl.textContent.slice(beforeDivide.length + 1, outputEl.textContent.length);

      let result = +beforeDivide / +afterDivide;
      result = result
        .toString()
        .match(/[0-9.]/g)
        .join('');
      result = +result;
      if (result - Math.floor(result) !== 0) {
        outputEl.innerHTML = result.toFixed(3);
      } else {
        outputEl.innerHTML = result;
      }
    }

    function multiply() {
      let multiplyIndex = outputEl.textContent.indexOf('*');

      let beforeMulti = outputEl.textContent.slice(0, multiplyIndex);
      let afterMulti = outputEl.textContent.slice(beforeMulti.length + 1, outputEl.textContent.length);

      let multiResult = beforeMulti * afterMulti;
      outputEl.innerHTML = multiResult;
    }

    function substract() {
      let minusIndex = outputEl.textContent.indexOf('-');
      let beforeMinus = outputEl.innerHTML.slice(0, minusIndex);
      let afterMinus = outputEl.innerHTML.slice(beforeMinus.length + 1, outputEl.textContent.length);

      let subsResult = beforeMinus - afterMinus;
      console.log(afterMinus);
      console.log(beforeMinus);
      outputEl.innerHTML = subsResult;
    }

    function addition() {
      let plusIndex = outputEl.textContent.indexOf('+');
      let beforePlus = outputEl.textContent.slice(0, plusIndex);
      let afterPlus = outputEl.textContent.slice(beforePlus.length + 1, outputEl.textContent.length);

      let additionResult = +beforePlus + +afterPlus;
      console.log(afterPlus);
      console.log(beforePlus);

      outputEl.innerHTML = additionResult;
    }

    equalsBtn.addEventListener('click', () => {
      if (outputEl.textContent.includes('*') === true) {
        return multiply();
      } else if (outputEl.textContent.includes('/') === true) {
        return divide();
      } else if (outputEl.textContent.includes('-') === true) {
        return substract();
      } else if (outputEl.textContent.includes('√') === true) {
        return squareRoot();
      } else if (outputEl.textContent.includes('+') === true) {
        return addition();
      }
    });
  });
});

deleteBtn.addEventListener('click', () => {
  let deleted = outputEl.textContent.split('');
  let del = deleted.pop();
  outputEl.textContent = deleted.join('');
  console.log(outputEl.textContent);
});

clearAllBtn.addEventListener('click', function deleteAll() {
  outputEl.textContent = '';
});
