const form = document.forms.calculator;
const moneyBefore = document.getElementById('money-before');
const moneyAfter = document.getElementById('money-after');
const heightAfter = document.getElementById('height-after');
const inputPercent = form.interest;
inputPercent.setAttribute('min', 0);

init();
form.addEventListener('input', init);

function init() {
  const initial = form.money.value
  moneyBefore.textContent = initial;
  const interest = form.interest.value / 100;
  const years = form.months.value / 12;

  const result = Math.round(initial * (1 + interest) ** years);

  moneyAfter.textContent = result;
  heightAfter.style.height = `${100 + (form.months.value / 12 * form.interest.value)}px`;
}