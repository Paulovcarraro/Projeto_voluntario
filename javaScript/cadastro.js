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

// ───────────── CE P :  F O R M A T A Ç Ã O ─────────────
const cepInput = document.getElementById("cep");

cepInput.addEventListener("input", (e) => {
  // Remove caracteres não numéricos
  let cep = e.target.value.replace(/\D/g, "");

  // Limita a 8 dígitos
  cep = cep.substring(0, 8);

  // Adiciona hífen se tiver mais de 5 dígitos
  if (cep.length > 5) {
    cep = `${cep.slice(0, 5)}-${cep.slice(5)}`;
  }

  e.target.value = cep;
});

// ───────────── ENVIO DO FORMULÁRIO ─────────────
document.getElementById("formCadastro").addEventListener("submit", (e) => {
  e.preventDefault(); // Impede envio padrão

  const cepValor = cepInput.value;
  const regexCep = /^\d{5}-\d{3}$/;

  // Validação do CEP já formatado
  if (!regexCep.test(cepValor)) {
    alert("Por favor, informe um CEP válido no formato 12345-678.");
    cepInput.focus();
    return;
  }

  // Captura os dados
  const dados = {
    instituicao: document.getElementById("instituicao").value.trim(),
    tipoAjuda: document.getElementById("tipoAjuda").value,
    titulo: document.getElementById("titulo").value.trim(),
    descricao: document.getElementById("descricao").value.trim(),
    cep: cepValor,
    rua: document.getElementById("rua").value,
    bairro: document.getElementById("bairro").value,
    cidade: document.getElementById("cidade").value,
    estado: document.getElementById("estado").value,
    contato: document.getElementById("contato").value.trim(),
  };

  // Recupera lista existente ou cria nova
  const lista = JSON.parse(localStorage.getItem("cadastroNecessidades")) || [];
  lista.push(dados);
  localStorage.setItem("cadastroNecessidades", JSON.stringify(lista));

  alert("Necessidade cadastrada com sucesso!");

  // Redireciona para a página de visualização
  window.location.href = "./visualizar.html";
});
