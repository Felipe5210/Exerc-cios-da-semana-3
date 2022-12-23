console.log('Exercício 6');

function verificaPalindromoFor(texto) {
  const meio = texto.length / 2;
  const fim = texto.length - 1;

  for (let i = 0; i < meio; i++) {
    if (texto[i] !== texto[fim - i]) {
      return false;
    }
  }

  return true;
}

const verificaPalindromo = (t) => [...t].reverse().join('') === t;

const teste0 = verificaPalindromo('radar');
console.log(teste0);
// true

const teste1 = verificaPalindromo('ana');
console.log(teste1);
// true

const teste2 = verificaPalindromo('julia');
console.log(teste2);
// false
