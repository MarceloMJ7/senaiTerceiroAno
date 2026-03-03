//Vetores: ○ Crie um vetor que armazene 10 números inteiros e desenvolva uma função 
//para buscar um número específico no vetor. 
//○ Implemente uma função para remover um elemento do vetor em uma 
//posição específica. 


let number = [7, 27, 30, 47, 88, 39, 1, 17, 55, 100];

function buscarNumero(vetor,numProcurado){
    for(i = 0; i < vetor.length; i++){
        if(vetor[i] === numProcurado){
            return i;
        }
    }
    return -1
}

function removerElemento(vetor,indice,quantidade){
   const novoArray = vetor.splice(indice,quantidade)
    return novoArray;
}

console.log(buscarNumero(number, 88 ))
//console.log("Array Antigo " + number)
//console.log('Numero removido: ' + removerElemento(number, 1, 1))
//console.log('Array novo ' + number)




