// Script para funcionamento no menu hamburguer

function toggleMenu() {
  document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}

// Função para fechar o menu ao clicar fora dele

document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".menu__btn");

  const clickedOutsideSidebar = !sidebar.contains(event.target);
  const clickedOutsideHamburger = !hamburger.contains(event.target);

  if (
    sidebar.classList.contains("active") &&
    clickedOutsideSidebar &&
    clickedOutsideHamburger
  ) {
    closeMenu();
  }
});
