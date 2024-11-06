document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("li, ol li");
  const element1 = elements[0];
  const element2 = elements[1];
  let isFirstClickElement1 = true;
  let isFirstClickElement2 = true;

  // Відстеження натискання на 1-му елементі
  element1.addEventListener("click", function () {
    if (isFirstClickElement1) {
      toggleColorById(this);
    } else {
      toggleColorByQuery(this);
    }
    isFirstClickElement1 = !isFirstClickElement1;
  });

  // Відстеження натискання на 2-му елементі
  element2.addEventListener("click", function () {
    if (isFirstClickElement2) {
      toggleColorById(this);
    } else {
      toggleColorByQuery(this);
    }
    isFirstClickElement2 = !isFirstClickElement2;
  });
});

// Функція для зміни кольору елемента
function toggleColorById(element) {
  if (element.style.backgroundColor === "pink") {
    element.style.backgroundColor = "white";
    element.style.color = "blue";
  } else {
    element.style.backgroundColor = "red";
    element.style.color = "black";
  }
}

// Функція для зміни кольору елемента
function toggleColorByQuery(element) {
  if (element.style.backgroundColor === "silver") {
    element.style.backgroundColor = "golden";
    element.style.color = "brown";
  } else {
    element.style.backgroundColor = "grey";
    element.style.color = "yellow";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const imageContainer = document.getElementById("imageContainer");
  let image = document.getElementById("parisImage");

  // Кнопки
  const addImageBtn = document.getElementById("addImageBtn");
  const increaseSizeBtn = document.getElementById("increaseSizeBtn");
  const decreaseSizeBtn = document.getElementById("decreaseSizeBtn");
  const removeImageBtn = document.getElementById("removeImageBtn");

  // Дія 1: Додати зображення
  addImageBtn.addEventListener("click", function () {
    if (!image) {
      image = document.createElement("img");
      image.src = "Paris.jpg";
      image.alt = "Paris";
      image.width = 300;
      image.id = "parisImage";
      imageContainer.appendChild(image);
    }
  });

  // Дія 2: Збільшити зображення
  increaseSizeBtn.addEventListener("click", function () {
    if (image) {
      image.width += 50;
    }
  });

  // Дія 3: Зменшити зображення
  decreaseSizeBtn.addEventListener("click", function () {
    if (image && image.width > 50) {
      image.width -= 50;
    }
  });

  // Дія 4: Видалити зображення
  removeImageBtn.addEventListener("click", function () {
    if (image) {
      imageContainer.removeChild(image);
      image = null;
    }
  });
});
