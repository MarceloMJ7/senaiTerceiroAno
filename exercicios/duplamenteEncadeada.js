//Implemente uma lista duplamente encadeada com as operações de inserir no
//início e remover do final da lista.
//○ Crie uma função que percorra a lista em ambas as direções, imprimindo os
//valores dos nós.

class No {
  constructor(valor) {
    this.valor = valor;
    this.proximo = null;
    this.anterior = null;
  }
}

class ListaDupla {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  inserirInicio(valor) {
    const novoNo = new No(valor); //Instanciamos o novo No

    if (this.head === null) {
      //Verifica se o head tá vazio, se estiver o head vai receber o valor..
      this.head = novoNo;
      return;
    } 

    novoNo.proximo = this.head; //Como o novo No foi criado, o novoNo.proximo será o antigo head
    this.head.anterior = novoNo; //
    novoNo.anterior = null;
    this.head = novoNo;
  }

  inserirFim(valor) {
    const novoNo = new No(valor);

    if (this.head === null) {
      //Verifica se o head tá vazio, se estiver o head vai receber o valor..
      this.tail = novoNo;
      return;
    }

    novoNo.anterior = this.tail; //novo nó
    this.head.proximo = novoNo;
    novoNo.proximo = null;
    this.tail = novoNo;
  }
}
