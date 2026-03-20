//Implemente uma pilha e adicione operações para verificar se a pilha está cheia ou vazia
//Utilize uma pilha para verificar se uma expressão aritmética contém parênteses balanceados (exemplo: ((1+2) * (3/4))).

class Pilha {
  constructor(tamanhoMax) {
    this.itens = [];
    this.tamanhoMax = tamanhoMax;
  }

  push(valor) {
    if (this.isFull()) {
      console.log("Pilha cheia");
      return;
    }
    this.itens.push(valor);
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Pilha vazia");
      return null;
    }
    return this.itens.pop();
  }

  top() {
    if (this.isEmpty()) {
      return null;
    }
    return this.itens[this.itens.length - 1];
  }

  isEmpty() {
    return this.itens.length === 0;
  }

  isFull() {
    return this.itens.length === this.tamanhoMax;
  }
}

function verificarParenteses(expressao) {
  const pilha = new Pilha(100);

  for (let i = 0; i < expressao.length; i++) {
    if (expressao[i] === "(") {
      pilha.push("(");
    }

    if (expressao[i] === ")") {
      if (pilha.isEmpty()) {
        return false;
      }
      pilha.pop();
    }
  }

  return pilha.isEmpty();
}

console.log(verificarParenteses("((1+2)*(3/4))"));

console.log(verificarParenteses("((1+2)*(3/4)"));
