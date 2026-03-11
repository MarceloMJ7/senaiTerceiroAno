//Implemente um algoritmo recursivo para realizar o percurso in-order de uma árvore binária
//Altere o código para implementar os percursos pre-order e post-order

class Node {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
  }
}

function inOrder(no) {
  if (no === null) {
    return;
  }

  inOrder(no.esquerda);
  console.log(no.valor);
  inOrder(no.direita);
}

function preOrder(no) {
  if (no === null) {
    return;
  }

  console.log(no.valor);
  preOrder(no.esquerda);
  preOrder(no.direita);
}

function postOrder(no) {
  if (no === null) {
    return;
  }

  postOrder(no.esquerda);
  postOrder(no.direita);
  console.log(no.valor);
}

let raiz = new Node(10);
raiz.esquerda = new Node(5);
raiz.direita = new Node(15);
raiz.esquerda.esquerda = new Node(2);
raiz.esquerda.direita = new Node(7);
raiz.direita.direita = new Node(20);

console.log("In-Order:");
inOrder(raiz);

console.log("Pre-Order:");
preOrder(raiz);

console.log("Post-Order:");
postOrder(raiz);
