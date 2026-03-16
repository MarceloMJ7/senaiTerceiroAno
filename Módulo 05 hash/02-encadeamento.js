//Implemente uma tabela hash com encadeamento, onde cada índice databela armazena uma lista encadeada de pares (chave, valor).
//○ Crie as funções para inserir, buscar e remover elementos da tabela

class No {
  constructor(chave, valor) {
    this.chave = chave;
    this.valor = valor;
    this.proximo = null;
  }
}

class TabelaHash {
  constructor(tamanho = 10) {
    this.tabela = new Array(tamanho);
    this.tamanho = tamanho;
  }

  hash(chave) {
    let soma = 0;

    for (let i = 0; i < chave.length; i++) {
      soma += chave.charCodeAt(i);
    }

    return soma % this.tamanho;
  }

  inserir(chave, valor) {
    let indice = this.hash(chave);

    let novoNo = new No(chave, valor);

    if (!this.tabela[indice]) {
      this.tabela[indice] = novoNo;
    } else {
      let atual = this.tabela[indice];

      while (atual.proximo) {
        atual = atual.proximo;
      }

      atual.proximo = novoNo;
    }
  }

  buscar(chave) {
    let indice = this.hash(chave);

    let atual = this.tabela[indice];

    while (atual) {
      if (atual.chave === chave) {
        return atual.valor;
      }

      atual = atual.proximo;
    }

    return null;
  }

  remover(chave) {
    let indice = this.hash(chave);

    let atual = this.tabela[indice];
    let anterior = null;

    while (atual) {
      if (atual.chave === chave) {
        if (anterior === null) {
          this.tabela[indice] = atual.proximo;
        } else {
          anterior.proximo = atual.proximo;
        }

        return true;
      }

      anterior = atual;
      atual = atual.proximo;
    }

    return false;
  }
}

let tabela = new TabelaHash();

tabela.inserir("nome", "Marcelo");
tabela.inserir("idade", 30);
tabela.inserir("cidade", "Joinville");

console.log(tabela.buscar("nome"));
console.log(tabela.buscar("idade"));

tabela.remover("idade");

console.log(tabela.buscar("idade"));
