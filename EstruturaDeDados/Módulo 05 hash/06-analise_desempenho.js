//Crie uma tabela hash e insira 500 elementos utilizando uma função de hash eficiente. A tabela deve ser ajustada para diferentes tamanhos (50, 100, 250).
// ○ Meça o tempo médio de busca e remoção de elementos e discuta como o tamanho da tabela afeta o desempenho.

// NÓ DA LISTA ENCADEADA

class No {
  constructor(chave, valor) {
    this.chave = chave;
    this.valor = valor;
    this.proximo = null;
  }
}

// TABELA HASH

class HashTable {
  constructor(tamanho) {
    this.tabela = new Array(tamanho);
    this.tamanho = tamanho;
  }

  hash(chave) {
    return chave % this.tamanho;
  }

  // inserir
  inserir(chave, valor) {
    let indice = this.hash(chave);

    let novo = new No(chave, valor);

    if (!this.tabela[indice]) {
      this.tabela[indice] = novo;
    } else {
      let atual = this.tabela[indice];

      while (atual.proximo) {
        atual = atual.proximo;
      }

      atual.proximo = novo;
    }
  }

  // buscar
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

  // remover
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

// TESTE DE DESEMPENHO

function testarTabela(tamanho) {
  let tabela = new HashTable(tamanho);

  let dados = [];

  // gerar 500 elementos
  for (let i = 0; i < 500; i++) {
    let numero = Math.floor(Math.random() * 10000);

    dados.push(numero);

    tabela.inserir(numero, numero);
  }

  // medir busca
  let inicioBusca = performance.now();

  for (let v of dados) {
    tabela.buscar(v);
  }

  let fimBusca = performance.now();

  let tempoBusca = (fimBusca - inicioBusca) / dados.length;

  // medir remoção
  let inicioRemocao = performance.now();

  for (let v of dados) {
    tabela.remover(v);
  }

  let fimRemocao = performance.now();

  let tempoRemocao = (fimRemocao - inicioRemocao) / dados.length;

  console.log("Tamanho da tabela:", tamanho);
  console.log("Tempo médio de busca:", tempoBusca.toFixed(6), "ms");
  console.log("Tempo médio de remoção:", tempoRemocao.toFixed(6), "ms");
  console.log("----------------------------------");
}

testarTabela(50);
testarTabela(100);
testarTabela(250);
