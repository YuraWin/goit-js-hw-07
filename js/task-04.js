let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

btnDecrement.addEventListener("click", onDecrementButtonClick);
btnIncrement.addEventListener("click", onIncrementButtonClick);

function onDecrementButtonClick() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function onIncrementButtonClick() {
  counterValue += 1;
  value.textContent = counterValue;
}
