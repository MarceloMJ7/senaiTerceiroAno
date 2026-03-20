//Implemente tanto o encadeamento quanto o endereçamento aberto e compare o desempenho de ambas as técnicas em um conjunto de 1000
//inserções e buscas.
//○ Utilize uma função de hash simples e um load factor de 0.75. Qual das abordagens apresenta melhor desempenho?

// ================================
// NÓ PARA LISTA ENCADEADA
// ================================

class No {
  constructor(chave, valor) {
    this.chave = chave;
    this.valor = valor;
    this.proximo = null;
  }
}

// ================================
// TABELA HASH COM ENCADEAMENTO
// ================================

class HashEncadeamento {
  constructor(tamanho) {
    this.tabela = new Array(tamanho);
    this.tamanho = tamanho;
  }

  hash(chave) {
    return chave % this.tamanho;
  }

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
}

// ================================
// TABELA HASH COM LINEAR PROBING
// ================================

class HashLinear {
  constructor(tamanho) {
    this.tabela = new Array(tamanho);
    this.tamanho = tamanho;
  }

  hash(chave) {
    return chave % this.tamanho;
  }

  inserir(chave, valor) {
    let indice = this.hash(chave);

    while (this.tabela[indice] !== undefined) {
      indice = (indice + 1) % this.tamanho;
    }

    this.tabela[indice] = { chave, valor };
  }

  buscar(chave) {
    let indice = this.hash(chave);
    let inicio = indice;

    while (this.tabela[indice] !== undefined) {
      if (this.tabela[indice].chave === chave) {
        return this.tabela[indice].valor;
      }

      indice = (indice + 1) % this.tamanho;

      if (indice === inicio) {
        break;
      }
    }

    return null;
  }
}

// ================================
// TESTE DE DESEMPENHO
// ================================

const elementos = 1000;
const tamanhoTabela = Math.floor(elementos / 0.75);

let hashEnc = new HashEncadeamento(tamanhoTabela);
let hashLin = new HashLinear(tamanhoTabela);

let dados = [];

// gera 1000 números aleatórios
for (let i = 0; i < elementos; i++) {
  dados.push(Math.floor(Math.random() * 10000));
}

// ----------------
// INSERÇÕES
// ----------------

console.time("Inserção Encadeamento");

for (let v of dados) {
  hashEnc.inserir(v, v);
}

console.timeEnd("Inserção Encadeamento");

console.time("Inserção Linear");

for (let v of dados) {
  hashLin.inserir(v, v);
}

console.timeEnd("Inserção Linear");

// ----------------
// BUSCAS
// ----------------

console.time("Busca Encadeamento");

for (let v of dados) {
  hashEnc.buscar(v);
}

console.timeEnd("Busca Encadeamento");

console.time("Busca Linear");

for (let v of dados) {
  hashLin.buscar(v);
}

console.timeEnd("Busca Linear");
