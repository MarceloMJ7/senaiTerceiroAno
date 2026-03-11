//Implemente uma função recursiva para calcular o fatorial de um número inteiro nnn.
//Determine a complexidade de tempo do algoritmo.

function fatorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * fatorial(n - 1);
}

let numero = 3;

console.log(fatorial(numero));

//A função realiza uma chamada recursiva reduzindo n em 1 até atingir o caso base. Assim, o número de chamadas cresce linearmente com n. Portanto, a complexidade de tempo do algoritmo é O(n).
