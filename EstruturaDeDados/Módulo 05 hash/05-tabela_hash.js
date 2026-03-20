//Implemente um sistema de dicionário utilizando tabelas hash, onde o usuário pode armazenar e recuperar palavras com seus significados. Use
//encadeamento para resolver colisões.
//○ Adicione a funcionalidade para lidar com remoção de palavras e buscar palavras que não estão no dicionário

// NÓ DA LISTA ENCADEADA

class No {
  constructor(palavra, significado) {
    this.palavra = palavra;
    this.significado = significado;
    this.proximo = null;
  }
}

// DICIONÁRIO COM TABELA HASH

class DicionarioHash {
  constructor(tamanho = 20) {
    this.tabela = new Array(tamanho);
    this.tamanho = tamanho;
  }

  // função hash para strings
  hash(palavra) {
    let soma = 0;

    for (let i = 0; i < palavra.length; i++) {
      soma += palavra.charCodeAt(i);
    }

    return soma % this.tamanho;
  }

  // INSERIR PALAVRA

  inserir(palavra, significado) {
    let indice = this.hash(palavra);

    let novo = new No(palavra, significado);

    if (!this.tabela[indice]) {
      this.tabela[indice] = novo;
    } else {
      let atual = this.tabela[indice];

      while (atual) {
        if (atual.palavra === palavra) {
          atual.significado = significado;
          return;
        }

        if (!atual.proximo) {
          break;
        }

        atual = atual.proximo;
      }

      atual.proximo = novo;
    }
  }

  // BUSCAR PALAVRA

  buscar(palavra) {
    let indice = this.hash(palavra);

    let atual = this.tabela[indice];

    while (atual) {
      if (atual.palavra === palavra) {
        return atual.significado;
      }

      atual = atual.proximo;
    }

    return "Palavra não encontrada no dicionário.";
  }

  // REMOVER PALAVRA

  remover(palavra) {
    let indice = this.hash(palavra);

    let atual = this.tabela[indice];
    let anterior = null;

    while (atual) {
      if (atual.palavra === palavra) {
        if (anterior === null) {
          this.tabela[indice] = atual.proximo;
        } else {
          anterior.proximo = atual.proximo;
        }

        return "Palavra removida.";
      }

      anterior = atual;
      atual = atual.proximo;
    }

    return "Palavra não encontrada para remoção.";
  }
}

// TESTANDO O DICIONÁRIO

let dicionario = new DicionarioHash();

dicionario.inserir(
  "algoritmo",
  "sequência de passos para resolver um problema",
);

dicionario.inserir("variavel", "espaço na memória para armazenar dados");

dicionario.inserir(
  "array",
  "estrutura de dados que armazena elementos em sequência",
);

console.log("Buscar algoritmo:");
console.log(dicionario.buscar("algoritmo"));

console.log("Buscar array:");
console.log(dicionario.buscar("array"));

console.log("Buscar palavra inexistente:");
console.log(dicionario.buscar("pilha"));

console.log("Remover variavel:");
console.log(dicionario.remover("variavel"));

console.log("Buscar variavel novamente:");
console.log(dicionario.buscar("variavel"));
