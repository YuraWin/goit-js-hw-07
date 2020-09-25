const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");
input.value = 16;

input.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  span.style.fontSize = event.currentTarget.value + "px";
}
