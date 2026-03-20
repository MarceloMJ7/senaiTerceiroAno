//Implemente um max-heap e escreva funções para inserir um novo elemento e remover o maior elemento.
//Use um heap para implementar uma fila de prioridades que sempre retorna o maior valor.

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  // inserir elemento
  inserir(valor) {
    this.heap.push(valor);
    this.subir(this.heap.length - 1);
  }

  // reorganiza para cima
  subir(indice) {
    let pai = Math.floor((indice - 1) / 2);

    while (indice > 0 && this.heap[indice] > this.heap[pai]) {
      [this.heap[indice], this.heap[pai]] = [this.heap[pai], this.heap[indice]];

      indice = pai;
      pai = Math.floor((indice - 1) / 2);
    }
  }

  // remover maior elemento (raiz)
  removerMax() {
    if (this.heap.length === 0) return null;
    if (this.heap.length === 1) return this.heap.pop();

    let max = this.heap[0];

    this.heap[0] = this.heap.pop();

    this.descer(0);

    return max;
  }

  // reorganiza para baixo
  descer(indice) {
    let maior = indice;
    let esquerda = 2 * indice + 1;
    let direita = 2 * indice + 2;

    if (esquerda < this.heap.length && this.heap[esquerda] > this.heap[maior]) {
      maior = esquerda;
    }

    if (direita < this.heap.length && this.heap[direita] > this.heap[maior]) {
      maior = direita;
    }

    if (maior !== indice) {
      [this.heap[indice], this.heap[maior]] = [
        this.heap[maior],
        this.heap[indice],
      ];

      this.descer(maior);
    }
  }

  mostrar() {
    console.log(this.heap);
  }
}

class FilaPrioridade {
  constructor() {
    this.heap = new MaxHeap();
  }

  enfileirar(valor) {
    this.heap.inserir(valor);
  }

  desenfileirar() {
    return this.heap.removerMax();
  }
}

const fila = new FilaPrioridade();

fila.enfileirar(10);
fila.enfileirar(50);
fila.enfileirar(30);
fila.enfileirar(40);

console.log("Maior prioridade:", fila.desenfileirar());
console.log("Maior prioridade:", fila.desenfileirar());
console.log("Maior prioridade:", fila.desenfileirar());
