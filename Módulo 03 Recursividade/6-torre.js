//Implemente o algoritmo recursivo para resolver o problema da Torre de Hanói, movendo nnn discos de uma haste para outra.
//Determine o número de movimentos necessários para resolver o problema e sua complexidade de tempo.
function torreHanoi(n, origem, destino, auxiliar) {
  if (n === 1) {
    console.log(`Mover disco 1 de ${origem} para ${destino}`);
    return;
  }

  torreHanoi(n - 1, origem, auxiliar, destino);

  console.log(`Mover disco ${n} de ${origem} para ${destino}`);

  torreHanoi(n - 1, auxiliar, destino, origem);
}

torreHanoi(3, "A", "C", "B");

//Complexidade de tempo: O(2^n)
//O número mínimo de movimentos para resolver a Torre de Hanói com n discos é: 2^n - 1
