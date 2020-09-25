const ref = {
  input: document.querySelector('input[type="number"]'),
  btnRender: document.querySelector('button[data-action="render"]'),
  btnDestroy: document.querySelector('button[data-action="destroy"]'),
  divBox: document.querySelector("#boxes"),
};

ref.btnRender.addEventListener("click", publicBoxes);
ref.btnDestroy.addEventListener("click", destroyBoxes);

function publicBoxes() {
  createBoxes(ref.input.value);
}

function createBoxes(amount) {
  let string = "";
  let size = 0;

  for (let i = 1; i <= amount; i += 1) {
    size = 30 + 10 * i;
    string += `<div class="item" style="width: ${size}px; height: ${size}px; background-color: rgb(${
      Math.random() * (255 - 1) + 1
    },${Math.random() * (255 - 1) + 1},${
      Math.random() * (255 - 1) + 1
    })"></div>`;
  }

  return (ref.divBox.innerHTML = string);
}

function destroyBoxes() {
  ref.divBox.innerHTML = "";
}
