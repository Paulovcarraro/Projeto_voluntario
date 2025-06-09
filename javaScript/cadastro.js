// ───────────── MENU HAMBÚRGUER ─────────────
function toggleMenu() {
  document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}

// Fecha o menu ao clicar fora dele
document.addEventListener("click", (event) => {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".menu__btn");

  const foraSidebar = !sidebar.contains(event.target);
  const foraHamburger = !hamburger.contains(event.target);

  if (sidebar.classList.contains("active") && foraSidebar && foraHamburger) {
    closeMenu();
  }
});
