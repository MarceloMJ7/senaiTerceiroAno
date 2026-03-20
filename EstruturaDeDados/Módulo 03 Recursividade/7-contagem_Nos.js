//Implemente uma função recursiva que conte o número de nós em uma lista encadeada.
//Analise o desempenho do algoritmo em termos de complexidade de tempo e espaço.

class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

function contarNos(no) {
  if (no === null) {
    return 0;
  }

  return 1 + contarNos(no.proximo);
}

let n1 = new Node(5);
let n2 = new Node(10);
let n3 = new Node(15);
let n4 = new Node(20);

n1.proximo = n2;
n2.proximo = n3;
n3.proximo = n4;

console.log(contarNos(n1));

//A função percorre recursivamente cada nó da lista até encontrar null.
//Complexidade de tempo: O(n)
//Complexidade de espaço: O(n) devido à pilha de chamadas recursivas.
