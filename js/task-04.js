let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const value = document.querySelector("#value");

btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;
  value.textContent = counterValue;
}

function increment() {
  counterValue += 1;
  value.textContent = counterValue;
}
