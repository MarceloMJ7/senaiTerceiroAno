//Implemente o algoritmo de Selection Sort e teste com uma lista de 10 números inteiros. Calcule o número de comparações e trocas realizadas.
//○ Modifique o Insertion Sort para funcionar com uma lista de strings e ordená-las alfabeticamente.

function selectionSort(vetor){

    let comparacoes = 0
    let trocas = 0

    for(let i = 0; i < vetor.length - 1; i++){

        let menor = i

        for(let j = i + 1; j < vetor.length; j++){

            comparacoes++

            if(vetor[j] < vetor[menor]){
                menor = j
            }

        }

        if(menor !== i){
            // troca
            let temp = vetor[i]
            vetor[i] = vetor[menor]
            vetor[menor] = temp

            trocas++
        }
    }

    return {vetor, comparacoes, trocas}
}

let numeros = [64, 25, 12, 22, 11, 90, 3, 45, 78, 1]

let resultado = selectionSort(numeros)

console.log("Vetor ordenado:", resultado.vetor)
console.log("Comparações:", resultado.comparacoes)
console.log("Trocas:", resultado.trocas)


//Insertion Sort

function insertionSortStrings(lista){

    for(let i = 1; i < lista.length; i++){

        let atual = lista[i]
        let j = i - 1

        // comparação alfabética
        while(j >= 0 && lista[j].localeCompare(atual) > 0){

            lista[j + 1] = lista[j]
            j--

        }

        lista[j + 1] = atual
    }

    return lista
}

let palavras = ["banana", "maça", "laranja", "uva", "abacaxi"]

let ordenado = insertionSortStrings(palavras)

console.log("Ordenado:", ordenado)