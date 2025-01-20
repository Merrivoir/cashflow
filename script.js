// Получаем элементы
const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.querySelector(".close-button");

// Открыть модальное окно
openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// Закрыть модальное окно
closeModalButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Закрыть окно при клике вне формы
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});