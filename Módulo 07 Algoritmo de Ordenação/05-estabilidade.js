//Implemente uma versão do Heap Sort que garanta a estabilidade daordenação (mesmo que naturalmente não seja estável).
//○ Implemente o Selection Sort de forma que ele se torne um algoritmo estável.

function stableHeapSort(arr) {
  let n = arr.length;
  let indexedArr = arr.map((v, i) => ({ v, i }));

  function heapify(a, n, i) {
    let largest = i,
      l = 2 * i + 1,
      r = 2 * i + 2;
    if (
      l < n &&
      (a[l].v > a[largest].v ||
        (a[l].v === a[largest].v && a[l].i > a[largest].i))
    )
      largest = l;
    if (
      r < n &&
      (a[r].v > a[largest].v ||
        (a[r].v === a[largest].v && a[r].i > a[largest].i))
    )
      largest = r;
    if (largest !== i) {
      [a[i], a[largest]] = [a[largest], a[i]];
      heapify(a, n, largest);
    }
  }

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) heapify(indexedArr, n, i);
  for (let i = n - 1; i > 0; i--) {
    [indexedArr[0], indexedArr[i]] = [indexedArr[i], indexedArr[0]];
    heapify(indexedArr, i, 0);
  }
  return indexedArr.map((x) => x.v);
}

function stableSelectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIdx]) minIdx = j;
    }
    let key = arr[minIdx];
    while (minIdx > i) {
      arr[minIdx] = arr[minIdx - 1];
      minIdx--;
    }
    arr[i] = key;
  }
  return arr;
}

const data1 = [5, 2, 5, 1];
console.log("Heap Sort Estável (Valores):", stableHeapSort([...data1]));

const data2 = [4, 5, 3, 2, 4, 1];
console.log(
  "Selection Sort Estável (Valores):",
  stableSelectionSort([...data2]),
);
