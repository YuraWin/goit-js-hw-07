const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", doTextInput);

function doTextInput(event) {
  span.textContent = event.currentTarget.value;
  if (span.textContent.length === 0) {
    span.textContent = "незнакомец";
  }
}
