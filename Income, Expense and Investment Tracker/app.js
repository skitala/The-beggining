const incomeInput = document.getElementById('income');
const savingsInput = document.getElementById('savings');
const expensesInput = document.getElementById('expenses');
const tipsInput = document.getElementById('tips');
let total = document.getElementById('total');
let totalInvest = document.getElementById('total-investments');

incomeInput.addEventListener('input', () => {
  console.log(incomeInput.value);
  total.innerHTML = `${incomeInput.value}e`;
  totalInvest.innerHTML = total.innerHTML;
});
savingsInput.addEventListener('input', () => {
  total.innerHTML = incomeInput.value - savingsInput.value + 'e';
  totalInvest.innerHTML = total.innerHTML;
});
expensesInput.addEventListener('input', () => {
  total.innerHTML = incomeInput.value - savingsInput.value - expensesInput.value + 'e';
  totalInvest.innerHTML = total.innerHTML;
});

tipsInput.addEventListener('input', () => {
  let tips = +tipsInput.value;

  total.innerHTML = `${incomeInput.value - savingsInput.value - expensesInput.value + tips}e`;
  console.log(tips);
  totalInvest.innerHTML = total.innerHTML;
});
