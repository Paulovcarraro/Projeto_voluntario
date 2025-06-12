// ───────────── MENU HAMBÚRGUER ─────────────
function toggleMenu() {
  document.getElementById("sidebar").classList.add("active");
}

function closeMenu() {
  document.getElementById("sidebar").classList.remove("active");
}

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

// ───────────── MODAIS ─────────────
const modalOverlay = document.getElementById("modalOverlay");
const btnConfirmar = document.getElementById("btnConfirmar");
const btnCancelar = document.getElementById("btnCancelar");

const modalSucesso = document.getElementById("modalSucesso");
const btnVisualizar = document.getElementById("btnVisualizar");
const btnVoltar = document.getElementById("btnVoltar");

let dadosTemporarios = null;

// ───────────── SUBMISSÃO COM VALIDAÇÃO + MODAL ─────────────
document
  .getElementById("formCadastro")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const instituicao = document.getElementById("instituicao").value.trim();
    const tipoAjuda = document.getElementById("tipoAjuda").value;
    const titulo = document.getElementById("titulo").value.trim();
    const descricao = document.getElementById("descricao").value.trim();
    const cep = cepInput.value.trim();
    const contato = document.getElementById("contato").value.trim();

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

    modalOverlay.style.display = "flex";
  });

// ───────────── CONFIRMAR ENVIO ─────────────
btnConfirmar.addEventListener("click", () => {
  const lista = JSON.parse(localStorage.getItem("cadastroNecessidades")) || [];
  lista.push(dadosTemporarios);
  localStorage.setItem("cadastroNecessidades", JSON.stringify(lista));

  modalOverlay.style.display = "none";
  modalSucesso.style.display = "flex";

  document.getElementById("formCadastro").reset();
  limparFormulario();
  history.replaceState(null, "", location.href);
});

// ───────────── BOTÕES DO MODAL DE SUCESSO ─────────────
btnVisualizar.addEventListener("click", () => {
  window.open("./visualizar.html", "_blank");
  modalSucesso.style.display = "none";
});

btnVoltar.addEventListener("click", () => {
  modalSucesso.style.display = "none";
});

// ───────────── CANCELAR ENVIO ─────────────
btnCancelar.addEventListener("click", () => {
  modalOverlay.style.display = "none";
});
