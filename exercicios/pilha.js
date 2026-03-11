//Implemente uma pilha e adicione operações para verificar se a pilha está cheia ou vazia
//Utilize uma pilha para verificar se uma expressão aritmética contém parênteses balanceados (exemplo: ((1+2) * (3/4))).

class pilha{
    constructor(){
        this.itens = [];
    }

    push(valor){
        this.itens.push(valor)
    }

    pop(){
      return this.itens.pop();
    }

    top(){
        if(this.itens === 0){
            return null;
        }
     return this.itens[this.itens.length - 1]
    }

}

