<p align="center">
  <img src="https://img.shields.io/static/v1?label=LICENSE&message=UniCesumar&color=blue&labelColor=0a2540&style=for-the-badge"/>
  <img src="https://img.shields.io/static/v1?label=STATUS&message=Finalizado&color=blue&labelColor=0a2540&style=for-the-badge"/>
</p>

# Projeto_voluntario

Uma aplicação web desenvolvida com foco social para conectar ONGs e instituições sociais a voluntários interessados em contribuir com diferentes causas. O projeto visa tornar a captação de ajuda mais eficiente, organizada e acessível. Site foi desenvolvido para uma ONG Ficticia, cujo nome é: `HelpUP`.

🔗 **Acesse aqui a versão online:**  
[https://paulovcarraro.github.io/Projeto_voluntario/](https://paulovcarraro.github.io/Projeto_voluntario/)

---

## 📌 Objetivo

Desenvolver uma plataforma intuitiva e responsiva onde instituições possam cadastrar suas necessidades (ajuda, doações, voluntariado) e onde voluntários possam visualizar e buscar oportunidades de participação social.

---

## 🧩 Funcionalidades Principais

### ✅ Estrutura e Navegação

- **Página Inicial (Home):** apresenta a proposta da plataforma de forma clara e objetiva, com um layout simples e convidativo. Conta com uma introdução ao projeto, destacando sua importância social e explicando como voluntários e instituições podem se beneficiar da ferramenta. Também inclui links de navegação para as demais páginas.
- **Página de Cadastro de Necessidades:** formulário completo para que instituições registrem suas demandas por voluntários ou doações.
- **Página de Visualização de Necessidades:** exibe, em formato de cards, todas as necessidades cadastradas, com opções de filtro e busca.
- **Layout Responsivo:** adaptado para diferentes tamanhos de tela, incluindo celulares e tablets.
  **🍔 Menu Hambúrguer Personalizado:** todas as páginas do site contam com um menu hambúrguer azul translúcido, que aparece ao clicar no ícone no canto superior esquerdo. Ele facilita a navegação, permitindo que o usuário acesse qualquer página da plataforma de forma prática, mesmo em dispositivos móveis. Os botões internos do menu direcionam para todas as seções principais do site com fluidez e acessibilidade.
- **Design Coeso:** cabeçalho e rodapé padronizados, com uso consistente de cores, fontes e espaçamento entre as páginas.

### 🌐 Página Inicial

- Mensagem explicando sobre a funcionalidade do site de forma clara e simples.
- **Cards clicáveis** (como se fossem botões) redirecionando para página desejada e com breve explicação sobre elas.
- Seção explicando de forma simples, como o site funciona.

📷 **Imagem do Cadastro de Necessidades:**

![Cadastro de Necessidades](caminho/da/imagem.png)

---

### 📝 Cadastro de Necessidades

- **Campos obrigatórios:** Nome da instituição, tipo de ajuda, título, descrição, CEP, endereço (autopreenchido via API), contato.
- **Validações** de campos e formatos.
- **Integração com a API ViaCEP** para preenchimento automático do endereço.
- Armazenamento das informações em array usando JavaScript puro, com persistência dos dados no **localStorage** do navegador.
- Modal de **confirmação** ao clicar no botão enviar.(O formulário e limpo todas as vezes que for confirmado seu envio)
- Modal de **sucesso** ao confirmar o envio dos dados do formulário, com opções de se manter na página de cadastro ou prosseguir e visualizar sua necessidade cadastrada.

📷 **Imagem do Cadastro de Necessidades:**

![Cadastro de Necessidades](caminho/da/imagem.png)

---

### 🔍 Visualização e Filtros

- Exibição dinâmica das necessidades em **cards**.
- Filtro por **tipo de ajuda** e campo de **busca por palavra-chave** (título ou descrição).

📷 **Imagem da Página de Visualização:**

![Visualização de Necessidades](caminho/da/imagem.png)

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**
- **API ViaCEP**

---

## 🧰 Ferramentas Utilizadas

- **Visual Studio Code (VSCode)** — editor de código utilizado para desenvolver o projeto.
- **Git e GitHub** para versionamento.
- **GitHub Pages** para publicação.

---

## 📁 Estrutura do Projeto

Projeto_voluntario/

# Html

- `index.html`
- `cadastro.html`
- `visualizar.html`

# css

- `styles.css`
- `cadastro.css`
- `visualizar.css`

# javaScript

- `main.js`
- `cadastro.js`
- `validacao.js`
- `visualizar.js`

# Images

- `Imagens do projeto`

---

## 🧠 Boas Práticas Aplicadas

- Estrutura de pastas organizada (HTML, CSS, JS).
- Códigos comentados e identificados.
- Semântica HTML aplicada corretamente.
- Responsividade garantida com CSS.
- Versionamento com histórico de commits claros e objetivos.

---

## 👨‍💻 Autor

Este projeto foi desenvolvido por estudantes de Engenharia de Software da Unicesumar:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/Paulovcarraro">
        <img src="https://github.com/Paulovcarraro.png" width="100px;" alt="Foto do Paulo Vinicius"/><br />
        <sub><b>Paulo Vinícius Carraro</b></sub>
      </a>
    </td>
  </tr>
</table>
