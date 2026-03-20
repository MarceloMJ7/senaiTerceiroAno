//Implemente uma função recursiva que calcule o enésimo número da sequência de Fibonacci.
//Analise o desempenho do algoritmo e sugira uma otimização (por exemplo, usando memoization ou uma abordagem iterativa).
function fibonacci(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));

function fibonacci(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);

  return memo[n];
}

console.log(fibonacci(6));

//O algoritmo recursivo de Fibonacci possui complexidade de tempo O(2^n), pois realiza muitas chamadas recursivas repetidas.
//Uma otimização é utilizar memoization, armazenando valores já calculados.
//Com essa otimização, a complexidade passa a ser O(n).
