console.log('Olá, Mundo!');

//const resultado = mensagemOla("Mariana");
//console.log(resultado);
// "Olá, Mariana!"
const eNome = document.getElementById('nome');
const botao = document.getElementById('botao');
const aMensagem = document.getElementById('mensagem');

const mensagemOla = (nome) => `Olá, ${nome}!`;

botao.addEventListener('click', () => {
  aMensagem.innerHTML = mensagemOla(eNome.value);
});
