//Crie uma fila e implemente as operações de enqueue e dequeue.
//Modifique o código para implementar uma fila circular
//Desenvolva um programa que simule o atendimento de um banco utilizando uma fila simples.

class Fila {
  constructor() {
    this.itens = [];
  }

  // adiciona no final da fila
  enqueue(elemento) {
    this.itens.push(elemento);
  }

  // remove o primeiro da fila
  dequeue() {
    if (this.itens.length === 0) {
      return "Fila vazia";
    }
    return this.itens.shift();
  }

  mostrarFila() {
    console.log(this.itens);
  }
}

let fila = new Fila();

fila.enqueue(10);
fila.enqueue(20);
fila.enqueue(30);

fila.mostrarFila(); // [10,20,30]

fila.dequeue();

fila.mostrarFila(); // [20,30]

class FilaCircular {
  constructor(tamanho) {
    this.tamanho = tamanho;
    this.fila = new Array(tamanho);
    this.inicio = 0;
    this.fim = 0;
    this.total = 0;
  }

  enqueue(elemento) {
    if (this.total === this.tamanho) {
      console.log("Fila cheia");
      return;
    }

    this.fila[this.fim] = elemento;

    this.fim = (this.fim + 1) % this.tamanho;

    this.total++;
  }

  dequeue() {
    if (this.total === 0) {
      console.log("Fila vazia");
      return null;
    }

    let removido = this.fila[this.inicio];

    this.inicio = (this.inicio + 1) % this.tamanho;

    this.total--;

    return removido;
  }

  mostrarFila() {
    console.log(this.fila);
  }
}

// teste

let fila1 = new FilaCircular(5);

fila.enqueue(10);
fila.enqueue(20);
fila.enqueue(30);

fila.mostrarFila();

fila.dequeue();

fila.mostrarFila();

class FilaBanco {
  constructor() {
    this.clientes = [];
  }

  entrarFila(nome) {
    console.log(nome + " entrou na fila.");
    this.clientes.push(nome);
  }

  atenderCliente() {
    if (this.clientes.length === 0) {
      console.log("Nenhum cliente na fila.");
      return;
    }

    let cliente = this.clientes.shift();

    console.log("Atendendo cliente: " + cliente);
  }

  mostrarFila() {
    console.log("Fila atual:", this.clientes);
  }
}

// Simulação

let banco = new FilaBanco();

banco.entrarFila("João");
banco.entrarFila("Maria");
banco.entrarFila("Pedro");

banco.mostrarFila();

banco.atenderCliente();

banco.mostrarFila();
