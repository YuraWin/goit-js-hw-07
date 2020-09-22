const selectedCategory = document.querySelector("#categories");
console.log(`В списке ${selectedCategory.childElementCount} категории`);

const listCategory = selectedCategory.querySelectorAll(".item");

[...listCategory].forEach((item) => {
  console.log("Категория:", item.querySelector("h2").textContent);
  console.log(
    "Количество элементов: ",
    item.querySelector("ul").childElementCount
  );
});
