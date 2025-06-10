// ───────────── LIMPA CAMPOS DE ENDEREÇO ─────────────
const limparFormulario = () => {
  ["rua", "bairro", "cidade", "estado"].forEach((id) => {
    document.getElementById(id).value = "";
  });
};

// ───────────── PREENCHE CAMPOS COM DADOS DA API ─────────────
const preencherFormulario = (end) => {
  document.getElementById("rua").value = end.logradouro;
  document.getElementById("bairro").value = end.bairro;
  document.getElementById("cidade").value = end.localidade;
  document.getElementById("estado").value = end.uf;
};

// ───────────── UTILITÁRIOS DE VALIDAÇÃO ─────────────
const apenasNumero = (str) => /^\d+$/.test(str);
const cepEhValido = (cep) => cep.length === 8 && apenasNumero(cep);
const contatoEhValido = (contato) => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
  return regexEmail.test(contato) || regexTelefone.test(contato);
};

// ───────────── BUSCA CEP NA API ─────────────
const pesquisarCep = async () => {
  const cepLimpo = document.getElementById("cep").value.replace("-", "");
  limparFormulario();

  if (!cepEhValido(cepLimpo)) {
    alert("CEP inválido.");
    return;
  }

  try {
    const url = `https://viacep.com.br/ws/${cepLimpo}/json/`;
    const resposta = await fetch(url);
    const dados = await resposta.json();

    if (dados.erro) {
      alert("CEP não encontrado.");
    } else {
      preencherFormulario(dados);
    }
  } catch (erro) {
    alert("Erro ao buscar o CEP.");
    console.error(erro);
  }
};

document.getElementById("cep").addEventListener("focusout", pesquisarCep);
