console.log('Exercício 3');

/*function concatena(arrayA, arrayB) {
  return [...arrayA,...arrayB];
};*/

const concatena = (arrayA, arrayB) => [...arrayA, ...arrayB];

const novoArray = concatena([1, 2, 3], [4, 5, 6]);
console.log(novoArray);
// novo array deve ser [1, 2, 3, 4, 5, 6]
