//Lista Simplesmente Encadeada:
//○ Implemente uma lista simplesmente encadeada com as seguintes operações:
//inserir no início, inserir no final e remover de uma posição específica.
//○ Modifique o código anterior para permitir a busca de um elemento por valor.

class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
  }
}

class ListaEncadeada {
  constructor() {
    this.head = null;
  }

  inserirNoInicio(valor) {
    const novoNo = new No(valor);
    novoNo.proximo = this.head;
    this.head = novoNo;
  }

  inserirNoFinal(valor) {
    const novoNo = new No(valor);

    if (this.head === null) {
      this.head = novoNo;
      return;
    }

    let atual = this.head;

    while (atual.proximo !== null) {
      atual = atual.proximo;
    }

    atual.proximo = novoNo;
  }

  removerNaPosicao(pos) {
    //Se a lista estiver vazia
    if (this.head === null) {
      return;
    }

    //Se quiser remover o primeiro
    if (pos === 0) {
      this.head = this.head.proximo;
      return;
    }

    //Percorrer até o nó anterior
    let atual = this.head;
    let contador = 0;

    while (atual !== null && contador < pos - 1) {
      atual = atual.proximo;
      contador++;
    }

    //Se posição for inválida
    if (atual === null || atual.proximo === null) {
      return;
    }

    //Fazer o nó pular o removido
    atual.proximo = atual.proximo.proximo;
  }

  mostrar() {
    let atual = this.head;

    while (atual !== null) {
      console.log(atual.valor);
      atual = atual.proximo;
    }
  }

  buscarValor(valor) {
    let headAtual = this.head;
    while (headAtual !== null) {
      if (headAtual.valor === valor) {
        return true;
      }
      atual = atual.proximo;
    }
    return false;
  }
}

const lista = new ListaEncadeada();

lista.inserirNoInicio(7);
lista.inserirNoInicio(2);
lista.inserirNoInicio(23);
lista.inserirNoInicio(55);

lista.mostrar();

lista.remover(2);
