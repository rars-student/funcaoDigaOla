let nome = document.getElementById("name");
let saudacao = document.getElementById("saudacao");
let divOculta = document.getElementById("div-oculta");
let btn = document.getElementById("btn");

const dizerOla = function (nome) {
  if ((divOculta.style.display = "none")) {
    divOculta.style.display = "block";
    saudacao.innerHTML = `Olá ${nome.value}! Muito obrigado por falar comigo. Tenha um ótimo dia`;

    return saudacao;
    
  } else {
    return "ERRO";
  }
  // console.log("Funcionou");
};

btn.addEventListener("click", (event) => {
  dizerOla(nome);
});
