const name1 = prompt (
    "Qual o nome do livro que você está lendo?"
)
const name2 = prompt (
    "Quantas páginas tem o livro (insira o número)"
)
const name3 = prompt (
    "Digite em qual página parou de ler (Insira o número)"
)
const resultado = parseInt(name2) - parseInt(name3)
const element = document.getElementById("mensagem")
if (resultado > name3) { element.innerHTML = "Você leu menos da metade de" + name1}
else (element.innerHTML = "Você leu mais da metade de" + name1 )