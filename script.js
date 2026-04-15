const projetos = [
  {
    nome: "Projeto 1",
    descricao: "Descrição do projeto 1",
    link: "#"
  },
  {
    nome: "Projeto 2",
    descricao: "Descrição do projeto 2",
    link: "#"
  },
  {
    nome: "Projeto 3",
    descricao: "Descrição do projeto 3",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(projeto => {
  const div = document.createElement("div");
  div.classList.add("card");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver projeto</a>
  `;

  container.appendChild(div);
});