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

// ──────────── Função para puxar os dados preenchidos no formulário ────────────
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("lista-necessidades");
  const inputBusca = document.getElementById("busca");
  const selectTipo = document.getElementById("filtro");

  // Lê TODAS as necessidades cadastradas
  const todasNecessidades =
    JSON.parse(localStorage.getItem("cadastroNecessidades")) || [];

  // Mostra todas ao abrir a página
  renderizarCards(todasNecessidades);

  // ──────────── EVENTOS DE FILTRO ────────────
  inputBusca.addEventListener("input", filtrar);
  selectTipo.addEventListener("change", filtrar);

  function filtrar() {
    const termo = inputBusca.value.toLowerCase();
    const tipoSelecionado = selectTipo.value; // "" = todos

    const filtradas = todasNecessidades.filter((n) => {
      const textoOk =
        n.titulo.toLowerCase().includes(termo) ||
        n.descricao.toLowerCase().includes(termo);

      const tipoOk = tipoSelecionado === "" || n.tipoAjuda === tipoSelecionado;

      return textoOk && tipoOk;
    });

    renderizarCards(filtradas);
  }

  // ──────────── FUNÇÃO DE RENDERIZAÇÃO ────────────
  function renderizarCards(lista) {
    container.innerHTML = "";

    if (lista.length === 0) {
      container.innerHTML = "<p>Nenhuma necessidade encontrada.</p>";
      return;
    }

    lista.forEach((item) => {
      const card = document.createElement("div");
      card.classList.add("card");

      // formata CEP para 12345-678
      const cepFormatado = item.cep.replace(/^(\d{5})(\d{3})$/, "$1-$2");

      card.innerHTML = `
        <h3>${item.titulo}</h3>
        <p><strong>Instituição:</strong> ${item.instituicao}</p>
        <p><strong>Tipo:</strong> ${item.tipoAjuda}</p>
        <p><strong>Descrição:</strong> ${item.descricao}</p>
        <p><strong>Endereço:</strong> ${item.rua}, ${item.bairro}, ${item.cidade} - ${item.estado}</p>
        <p><strong>CEP:</strong> ${cepFormatado}</p>
        <p><strong>Contato:</strong> ${item.contato}</p>
      `;
      container.appendChild(card);
    });
  }
});
