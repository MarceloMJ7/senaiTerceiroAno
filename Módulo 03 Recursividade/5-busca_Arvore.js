//Implemente uma função recursiva para buscar um valor em uma árvore binária de busca.
//Qual é a complexidade de tempo da busca em termos de nnn, onde nnn é o número de nós na árvore?

class Node {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
  }
}

function buscar(no, valor) {
  if (no === null) {
    return false;
  }

  if (no.valor === valor) {
    return true;
  }

  if (valor < no.valor) {
    return buscar(no.esquerda, valor);
  } else {
    return buscar(no.direita, valor);
  }
}

let raiz = new Node(10);

raiz.esquerda = new Node(5);
raiz.direita = new Node(15);

raiz.esquerda.esquerda = new Node(2);
raiz.esquerda.direita = new Node(7);

raiz.direita.direita = new Node(20);

console.log(buscar(raiz, 7)); // true
console.log(buscar(raiz, 12)); // false

//Foi implementada uma função recursiva para buscar um valor em uma árvore binária de busca.
//A complexidade de tempo é:
//O(log n) no caso de uma árvore balanceada.
//O(n) no pior caso, quando a árvore está desbalanceada.
