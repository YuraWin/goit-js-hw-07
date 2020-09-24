const input = document.querySelector("#validation-input");
console.log(input);

input.addEventListener("blur", checkInput);

function checkInput(event) {
  const currentLength = event.currentTarget.value.length;
  const limitLength = event.currentTarget.dataset.length;

  if (currentLength > limitLength) {
    if (event.currentTarget.classList.contains("valid")) {
      event.currentTarget.classList.remove("valid");
    }
    event.currentTarget.classList.add("invalid");
  } else if ((currentLength <= limitLength) & (currentLength > 0)) {
    if (event.currentTarget.classList.contains("invalid")) {
      event.currentTarget.classList.remove("invalid");
    }

    event.currentTarget.classList.add("valid");
  } else if (currentLength === 0) {
    if (event.currentTarget.classList.contains("valid")) {
      event.currentTarget.classList.remove("valid");
    }
    if (event.currentTarget.classList.contains("invalid")) {
      event.currentTarget.classList.remove("invalid");
    }
  }
}
