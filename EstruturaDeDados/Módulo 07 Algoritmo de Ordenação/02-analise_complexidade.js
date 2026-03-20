//Calcule a complexidade de tempo para o Bubble Sort ao ordenar uma lista de 100 elementos. Como a complexidade muda quando a lista já está ordenada?
//○ Compare o número de comparações realizadas pelo Selection Sort e pelo Insertion Sort em uma lista de 10 elementos.

function bubbleSort(arr) {
  let comparacoes = 0;
  let trocaTotal = 0;
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let trocou = false;
    for (let j = 0; j < n - i - 1; j++) {
      comparacoes++;
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        trocou = true;
        trocaTotal++;
      }
    }
    if (!trocou) break;
  }
  return { arr, comparacoes, trocaTotal };
}

function comparisonSelectionInsertion(arr) {
  let compSelection = 0;
  let a1 = [...arr];
  for (let i = 0; i < a1.length - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < a1.length; j++) {
      compSelection++;
      if (a1[j] < a1[minIdx]) minIdx = j;
    }
    [a1[i], a1[minIdx]] = [a1[minIdx], a1[i]];
  }

  let compInsertion = 0;
  let a2 = [...arr];
  for (let i = 1; i < a2.length; i++) {
    let key = a2[i];
    let j = i - 1;
    while (j >= 0) {
      compInsertion++;
      if (a2[j] > key) {
        a2[j + 1] = a2[j];
        j--;
      } else {
        break;
      }
    }
    a2[j + 1] = key;
  }
  return { compSelection, compInsertion };
}

const sortedList = Array.from({ length: 100 }, (_, i) => i);
const resBubbleSorted = bubbleSort([...sortedList]);
console.log(
  `Bubble Sort (100 elementos já ordenados): ${resBubbleSorted.comparacoes} comparações (O(n)).`,
);

const randomList = Array.from({ length: 100 }, () =>
  Math.floor(Math.random() * 100),
);
const resBubbleRandom = bubbleSort([...randomList]);
console.log(
  `Bubble Sort (100 elementos aleatórios): ${resBubbleRandom.comparacoes} comparações (O(n^2)).`,
);

const compareCounts = comparisonSelectionInsertion([
  10, 9, 8, 7, 6, 5, 4, 3, 2, 1,
]);
console.log("\nComparação em lista de 10 elementos (Invertida):");
console.log(`Selection Sort: ${compareCounts.compSelection} comparações.`);
console.log(`Insertion Sort: ${compareCounts.compInsertion} comparações.`);
