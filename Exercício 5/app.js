console.log('Exercício 5');

function somaTudo(...soma) {
  let total = 0;

  soma.forEach((soma) => {
    total += soma;
  });
  return total;
}

const resultado = somaTudo(1, 2, 3, 4);
console.log(resultado);
// resultado deve ser 10
