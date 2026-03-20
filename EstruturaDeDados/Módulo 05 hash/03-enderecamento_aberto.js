//Implemente uma tabela hash utilizando probing linear para resolver colisões.
//○ Verifique o comportamento da tabela à medida que você insere mais elementos, e analise o que acontece quando a tabela se aproxima de sua
//capacidade máxima.

class HashTable {
  constructor(tamanho = 10) {
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

  remover(chave) {
    let indice = this.hash(chave);
    let inicio = indice;

    while (this.tabela[indice] !== undefined) {
      if (this.tabela[indice].chave === chave) {
        this.tabela[indice] = undefined;
        return true;
      }

      indice = (indice + 1) % this.tamanho;

      if (indice === inicio) {
        break;
      }
    }

    return false;
  }

  mostrar() {
    console.log(this.tabela);
  }
}

let tabela = new HashTable(10);

tabela.inserir(15, "A");
tabela.inserir(25, "B");
tabela.inserir(35, "C");
tabela.inserir(45, "D");
tabela.inserir(55, "E");

tabela.mostrar();

console.log("Buscar 35:", tabela.buscar(35));

tabela.remover(25);

tabela.mostrar();
