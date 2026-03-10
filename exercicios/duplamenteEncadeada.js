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
      this.head = novoNo;
      return;
    }

    novoNo.anterior = this.tail; //Novo nó aponta para o antigo tail
    this.tail.proximo = novoNo; //O antigo tail aponta para o novo tail
    novoNo.proximo = null;
    this.tail = novoNo;
  }

  percorrerLista() {
    console.log("Percorrendo do início para o fim:");
    let atual = this.head;
  
    while (atual !== null) {
      console.log(atual.valor);
      atual = atual.proximo;
    }
  
    console.log("Percorrendo do fim para o início:");
  
    atual = this.tail;
  
    while (atual !== null) {
      console.log(atual.valor);
      atual = atual.anterior;
    }
  }
}
