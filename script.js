const projetos = [
  {
    nome: "Projeto 1",
      descricao: "Meu primeiro projeto em HTML",
      link: "https://github.com/paulodanilo46-stack/meu-portfolio.git"
  },
  {
    nome: "Projeto 2",
      descricao: "Projeto Portfolio - React",
      link: "https://github.com/paulodanilo46-stack/meu-portfolio-react.git"
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
