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

// ───────────── CEP: FORMATAÇÃO ─────────────
const cepInput = document.getElementById("cep");

cepInput.addEventListener("input", (e) => {
  let cep = e.target.value.replace(/\D/g, "");
  cep = cep.substring(0, 8);
  if (cep.length > 5) {
    cep = `${cep.slice(0, 5)}-${cep.slice(5)}`;
  }
  e.target.value = cep;
});

// ───────────── MODAL DE CONFIRMAÇÃO ─────────────
const modalOverlay = document.getElementById("modalOverlay");
const btnConfirmar = document.getElementById("btnConfirmar");
const btnCancelar = document.getElementById("btnCancelar");

let dadosTemporarios = null;

// ───────────── SUBMISSÃO COM VALIDAÇÃO + MODAL ─────────────
document.getElementById("formCadastro").addEventListener("submit", function (e) {
  e.preventDefault();

  const instituicao = document.getElementById("instituicao").value.trim();
  const tipoAjuda = document.getElementById("tipoAjuda").value;
  const titulo = document.getElementById("titulo").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const cep = cepInput.value.trim();
  const contato = document.getElementById("contato").value.trim();

  // Validações
  if (
    instituicao === "" ||
    tipoAjuda === "" ||
    titulo === "" ||
    descricao === "" ||
    cep === "" ||
    contato === ""
  ) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  const regexCep = /^\d{5}-\d{3}$/;
  if (!regexCep.test(cep)) {
    alert("Por favor, informe um CEP válido no formato 12345-678.");
    cepInput.focus();
    return;
  }

  if (!contatoEhValido(contato)) {
    alert("Contato inválido. Informe um e-mail ou telefone válido.");
    return;
  }

  // Guarda dados temporariamente
  dadosTemporarios = {
    instituicao,
    tipoAjuda,
    titulo,
    descricao,
    cep,
    rua: document.getElementById("rua").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value,
    contato,
  };

  // Exibe o modal
  modalOverlay.style.display = "flex";
});

// ───────────── CONFIRMAR ENVIO ─────────────
btnConfirmar.addEventListener("click", () => {
  const lista = JSON.parse(localStorage.getItem("cadastroNecessidades")) || [];
  lista.push(dadosTemporarios);
  localStorage.setItem("cadastroNecessidades", JSON.stringify(lista));

  modalOverlay.style.display = "none";
  alert("Necessidade cadastrada com sucesso!");

  // Limpa o formulário
  document.getElementById("formCadastro").reset();
  limparFormulario(); // Função que limpa os campos de endereço preenchidos via CEP

  // Abre a página de visualização em nova aba
  window.open("./visualizar.html", "_blank");

  // Remove os dados do histórico para evitar que apareçam ao voltar
  history.replaceState(null, "", location.href);
});

// ───────────── CANCELAR ENVIO ─────────────
btnCancelar.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});

