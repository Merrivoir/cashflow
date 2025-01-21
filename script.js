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

// Ожидание полной загрузки страницы
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("main-header");

  // Функция обработки скролла
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("header-scrolled");
    } else {
      header.classList.remove("header-scrolled");
    }
  });
});