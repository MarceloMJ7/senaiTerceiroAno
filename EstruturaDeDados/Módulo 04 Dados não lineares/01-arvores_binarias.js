//Implemente uma árvore binária e crie as funções para realizar os percursos in-order, pre-order e post-order
//Dado um conjunto de números, construa uma árvore binária de busca (BST) e implemente funções para inserir, buscar e remover elementos da árvore.

class No {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
  }
}

class ArvoreBinariaBusca {
  constructor() {
    this.raiz = null;
  }

  inserir(valor) {
    const novoNo = new No(valor);

    if (this.raiz === null) {
      this.raiz = novoNo;
      return;
    }

    let atual = this.raiz;

    while (true) {
      if (valor < atual.valor) {
        if (atual.esquerda === null) {
          atual.esquerda = novoNo;
          return;
        }

        atual = atual.esquerda;
      } else {
        if (atual.direita === null) {
          atual.direita = novoNo;
          return;
        }

        atual = atual.direita;
      }
    }
  }

  buscar(valor) {
    let atual = this.raiz;

    while (atual !== null) {
      if (valor === atual.valor) {
        return true;
      }

      if (valor < atual.valor) {
        atual = atual.esquerda;
      } else {
        atual = atual.direita;
      }
    }

    return false;
  }

  remover(valor) {
    this.raiz = this.removerNo(this.raiz, valor);
  }

  removerNo(no, valor) {
    if (no === null) {
      return null;
    }

    if (valor < no.valor) {
      no.esquerda = this.removerNo(no.esquerda, valor);
      return no;
    }

    if (valor > no.valor) {
      no.direita = this.removerNo(no.direita, valor);
      return no;
    }

    if (no.esquerda === null && no.direita === null) {
      return null;
    }

    if (no.esquerda === null) {
      return no.direita;
    }

    if (no.direita === null) {
      return no.esquerda;
    }

    let sucessor = this.encontrarMin(no.direita);

    no.valor = sucessor.valor;

    no.direita = this.removerNo(no.direita, sucessor.valor);

    return no;
  }

  encontrarMin(no) {
    while (no.esquerda !== null) {
      no = no.esquerda;
    }

    return no;
  }

  preOrder(no) {
    if (no !== null) {
      console.log(no.valor);
      this.preOrder(no.esquerda);
      this.preOrder(no.direita);
    }
  }

  inOrder(no) {
    if (no !== null) {
      this.inOrder(no.esquerda);
      console.log(no.valor);
      this.inOrder(no.direita);
    }
  }

  postOrder(no) {
    if (no !== null) {
      this.postOrder(no.esquerda);
      this.postOrder(no.direita);
      console.log(no.valor);
    }
  }
}

const arvore = new ArvoreBinariaBusca();

arvore.inserir(50);
arvore.inserir(30);
arvore.inserir(70);
arvore.inserir(20);
arvore.inserir(40);
arvore.inserir(60);
arvore.inserir(80);

console.log("Percurso In-Order:");
arvore.inOrder(arvore.raiz);

console.log("Percurso Pre-Order:");
arvore.preOrder(arvore.raiz);

console.log("Percurso Post-Order:");
arvore.postOrder(arvore.raiz);

console.log("Buscar 40:", arvore.buscar(40));

console.log("Removendo 70");
arvore.remover(70);

console.log("InOrder após remoção:");
arvore.inOrder(arvore.raiz);
