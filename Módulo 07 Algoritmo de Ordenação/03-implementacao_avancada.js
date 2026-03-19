//Implemente o Merge Sort e teste com uma lista de 50 números aleatórios.
//Verifique o tempo de execução comparado com o Quick Sort.
//○ Modifique o Quick Sort para selecionar o pivô como o valor mediano de três
//elementos (início, meio e fim) e compare o desempenho com a versão original.

// Gerar lista aleatória
function gerarLista(tamanho) {
  let lista = [];
  for (let i = 0; i < tamanho; i++) {
    lista.push(Math.floor(Math.random() * 1000));
  }
  return lista;
}

// MERGE SORT
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let meio = Math.floor(arr.length / 2);

  let esquerda = mergeSort(arr.slice(0, meio));
  let direita = mergeSort(arr.slice(meio));

  return merge(esquerda, direita);
}

function merge(esq, dir) {
  let resultado = [];
  let i = 0,
    j = 0;

  while (i < esq.length && j < dir.length) {
    if (esq[i] < dir[j]) {
      resultado.push(esq[i]);
      i++;
    } else {
      resultado.push(dir[j]);
      j++;
    }
  }

  return resultado.concat(esq.slice(i)).concat(dir.slice(j));
}

// QUICK SORT (pivô simples)
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivo = arr[arr.length - 1];
  let menores = [];
  let maiores = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivo) menores.push(arr[i]);
    else maiores.push(arr[i]);
  }

  return [...quickSort(menores), pivo, ...quickSort(maiores)];
}

// QUICK SORT (mediana de três)
function quickSortMediana(arr) {
  if (arr.length <= 1) return arr;

  let inicio = arr[0];
  let meio = arr[Math.floor(arr.length / 2)];
  let fim = arr[arr.length - 1];

  let pivo = mediana(inicio, meio, fim);

  let menores = [];
  let iguais = [];
  let maiores = [];

  for (let num of arr) {
    if (num < pivo) menores.push(num);
    else if (num > pivo) maiores.push(num);
    else iguais.push(num);
  }

  return [
    ...quickSortMediana(menores),
    ...iguais,
    ...quickSortMediana(maiores),
  ];
}

function mediana(a, b, c) {
  if ((a <= b && b <= c) || (c <= b && b <= a)) return b;
  if ((b <= a && a <= c) || (c <= a && a <= b)) return a;
  return c;
}

// TESTE DE TEMPO
let lista = gerarLista(50);

let lista1 = [...lista];
let lista2 = [...lista];
let lista3 = [...lista];

console.log("Lista original:");
console.log(lista);

// Merge Sort
let inicio = performance.now();
let mergeResultado = mergeSort(lista1);
let fim = performance.now();
console.log("\nMerge Sort:", mergeResultado);
console.log("Tempo:", (fim - inicio).toFixed(4), "ms");

// Quick Sort normal
inicio = performance.now();
let quickResultado = quickSort(lista2);
fim = performance.now();
console.log("\nQuick Sort:", quickResultado);
console.log("Tempo:", (fim - inicio).toFixed(4), "ms");

// Quick Sort mediana de três
inicio = performance.now();
let quickMedianaResultado = quickSortMediana(lista3);
fim = performance.now();
console.log("\nQuick Sort (Mediana de 3):", quickMedianaResultado);
console.log("Tempo:", (fim - inicio).toFixed(4), "ms");
