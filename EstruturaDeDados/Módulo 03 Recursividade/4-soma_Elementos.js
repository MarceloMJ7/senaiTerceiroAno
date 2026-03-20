//Crie uma função recursiva que percorra uma lista simplesmente encadeada e retorne a soma de todos os elementos da lista.

class Node {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

function somaLista(no) {
  if (no === null) {
    return 0;
  }

  return no.valor + somaLista(no.proximo);
}

let n1 = new Node(5);
let n2 = new Node(10);
let n3 = new Node(15);
let n4 = new Node(20);

n1.proximo = n2;
n2.proximo = n3;
n3.proximo = n4;

console.log(somaLista(n1));
