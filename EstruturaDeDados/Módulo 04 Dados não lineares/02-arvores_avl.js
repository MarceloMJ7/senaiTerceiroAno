//Implemente uma árvore AVL com as operações de inserção e remoção, garantindo que a árvore permaneça balanceada após cada operação.

class No {
  constructor(valor) {
    this.valor = valor;
    this.esquerda = null;
    this.direita = null;
    this.altura = 1;
  }
}

class AVL {
  constructor() {
    this.raiz = null;
  }

  altura(no) {
    if (no === null) return 0;
    return no.altura;
  }

  fatorBalanceamento(no) {
    if (no === null) return 0;
    return this.altura(no.esquerda) - this.altura(no.direita);
  }

  atualizarAltura(no) {
    no.altura = 1 + Math.max(this.altura(no.esquerda), this.altura(no.direita));
  }

  rotacaoDireita(y) {
    let x = y.esquerda;
    let T2 = x.direita;

    x.direita = y;
    y.esquerda = T2;

    this.atualizarAltura(y);
    this.atualizarAltura(x);

    return x;
  }

  rotacaoEsquerda(x) {
    let y = x.direita;
    let T2 = y.esquerda;

    y.esquerda = x;
    x.direita = T2;

    this.atualizarAltura(x);
    this.atualizarAltura(y);

    return y;
  }

  inserir(valor) {
    this.raiz = this.inserirNo(this.raiz, valor);
  }

  inserirNo(no, valor) {
    if (no === null) {
      return new No(valor);
    }

    if (valor < no.valor) {
      no.esquerda = this.inserirNo(no.esquerda, valor);
    } else if (valor > no.valor) {
      no.direita = this.inserirNo(no.direita, valor);
    } else {
      return no;
    }

    this.atualizarAltura(no);

    let balance = this.fatorBalanceamento(no);

    if (balance > 1 && valor < no.esquerda.valor) {
      return this.rotacaoDireita(no);
    }

    if (balance < -1 && valor > no.direita.valor) {
      return this.rotacaoEsquerda(no);
    }

    if (balance > 1 && valor > no.esquerda.valor) {
      no.esquerda = this.rotacaoEsquerda(no.esquerda);
      return this.rotacaoDireita(no);
    }

    if (balance < -1 && valor < no.direita.valor) {
      no.direita = this.rotacaoDireita(no.direita);
      return this.rotacaoEsquerda(no);
    }

    return no;
  }

  minValor(no) {
    let atual = no;
    while (atual.esquerda !== null) {
      atual = atual.esquerda;
    }
    return atual;
  }

  remover(valor) {
    this.raiz = this.removerNo(this.raiz, valor);
  }

  removerNo(no, valor) {
    if (no === null) return no;

    if (valor < no.valor) {
      no.esquerda = this.removerNo(no.esquerda, valor);
    } else if (valor > no.valor) {
      no.direita = this.removerNo(no.direita, valor);
    } else {
      if (no.esquerda === null || no.direita === null) {
        let temp = no.esquerda ? no.esquerda : no.direita;

        if (temp === null) {
          temp = no;
          no = null;
        } else {
          no = temp;
        }
      } else {
        let temp = this.minValor(no.direita);

        no.valor = temp.valor;

        no.direita = this.removerNo(no.direita, temp.valor);
      }
    }

    if (no === null) return no;

    this.atualizarAltura(no);

    let balance = this.fatorBalanceamento(no);

    if (balance > 1 && this.fatorBalanceamento(no.esquerda) >= 0) {
      return this.rotacaoDireita(no);
    }

    if (balance > 1 && this.fatorBalanceamento(no.esquerda) < 0) {
      no.esquerda = this.rotacaoEsquerda(no.esquerda);
      return this.rotacaoDireita(no);
    }

    if (balance < -1 && this.fatorBalanceamento(no.direita) <= 0) {
      return this.rotacaoEsquerda(no);
    }

    if (balance < -1 && this.fatorBalanceamento(no.direita) > 0) {
      no.direita = this.rotacaoDireita(no.direita);
      return this.rotacaoEsquerda(no);
    }

    return no;
  }

  inOrder(no) {
    if (no !== null) {
      this.inOrder(no.esquerda);
      console.log(no.valor);
      this.inOrder(no.direita);
    }
  }
}

const arvore = new AVL();

arvore.inserir(10);
arvore.inserir(20);
arvore.inserir(30);
arvore.inserir(40);
arvore.inserir(50);
arvore.inserir(25);

console.log("Percurso InOrder:");
arvore.inOrder(arvore.raiz);

arvore.remover(40);

console.log("Após remover 40:");
arvore.inOrder(arvore.raiz);
