const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const list = document.querySelector("#ingredients");

list.append(...createElements(ingredients));

function createElements(listIngredients) {
  return listIngredients.map((item) => {
    const element = document.createElement("li");
    element.textContent = item;
    return element;
  });
}
