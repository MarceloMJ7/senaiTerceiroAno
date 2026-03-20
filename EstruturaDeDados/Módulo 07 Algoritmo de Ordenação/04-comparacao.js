//ompare o desempenho de Merge Sort, Quick Sort e Heap Sort com listas de 100, 1000 e 10.000 elementos aleatórios. Qual algoritmo apresenta o melhor desempenho?
//○ Dado um conjunto de elementos com valores repetidos, implemente os
//algoritmos Quick Sort e Merge Sort e verifique qual preserva a ordem relativa dos elementos iguais.

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const meio = Math.floor(arr.length / 2);
  const esq = mergeSort(arr.slice(0, meio));
  const dir = mergeSort(arr.slice(meio));
  return merge(esq, dir);
}
function merge(esq, dir) {
  let result = [],
    i = 0,
    j = 0;
  while (i < esq.length && j < dir.length) {
    if (esq[i].v <= dir[j].v) result.push(esq[i++]);
    else result.push(dir[j++]);
  }
  return result.concat(esq.slice(i)).concat(dir.slice(j));
}

function quickSort(arr) {
  if (arr.length <= 1) return arr;
  let pivot = arr[Math.floor(arr.length / 2)];
  let esq = [],
    dir = [],
    meio = [];
  for (let x of arr) {
    if (x.v < pivot.v) esq.push(x);
    else if (x.v > pivot.v) dir.push(x);
    else meio.push(x);
  }
  return quickSort(esq).concat(meio).concat(quickSort(dir));
}

function heapSort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(arr, n, i);
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify(arr, i, 0);
  }
  return arr;
}
function heapify(arr, n, i) {
  let largest = i,
    l = 2 * i + 1,
    r = 2 * i + 2;
  if (l < n && arr[l].v > arr[largest].v) largest = l;
  if (r < n && arr[r].v > arr[largest].v) largest = r;
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function runBenchmark(n) {
  const data = Array.from({ length: n }, () => ({
    v: Math.floor(Math.random() * n),
    id: Math.random(),
  }));
  console.log(`\n--- Benchmark (${n} elementos) ---`);
  console.time("Merge Sort");
  mergeSort([...data]);
  console.timeEnd("Merge Sort");
  console.time("Quick Sort");
  quickSort([...data]);
  console.timeEnd("Quick Sort");
  console.time("Heap Sort");
  heapSort([...data]);
  console.timeEnd("Heap Sort");
}

[100, 1000, 10000].forEach((n) => runBenchmark(n));

const repetidos = [
  { v: 5, id: 1 },
  { v: 3, id: 2 },
  { v: 5, id: 3 },
  { v: 2, id: 4 },
];
console.log("\nTeste de Estabilidade (Repetidos):");
const resMerge = mergeSort([...repetidos]);
const resQuick = quickSort([...repetidos]);
console.log("Merge Sort é Estável? ", resMerge[1].id < resMerge[2].id);
console.log("Quick Sort é Estável? ", resQuick[2].id < resQuick[3].id);
