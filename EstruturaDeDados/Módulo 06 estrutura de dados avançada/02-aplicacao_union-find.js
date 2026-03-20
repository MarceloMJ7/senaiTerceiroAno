//○ Utilizando sua implementação de Union-Find, implemente o Algoritmo de Kruskal para encontrar a árvore geradora mínima de um grafo ponderado.
//○ Dado um conjunto de arestas e vértices, determine se existe um ciclo no grafo.

// Union-Find (Conjuntos Disjuntos)
class DisjointSet {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);

    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) return false;

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }

    return true;
  }
}

// Algoritmo de Kruskal
function kruskal(vertices, edges) {
  // ordenar arestas pelo peso
  edges.sort((a, b) => a.weight - b.weight);

  let ds = new DisjointSet(vertices);

  let mst = [];
  let custoTotal = 0;

  for (let edge of edges) {
    let u = edge.u;
    let v = edge.v;

    if (ds.find(u) !== ds.find(v)) {
      ds.union(u, v);

      mst.push(edge);

      custoTotal += edge.weight;
    }
  }

  return { mst, custoTotal };
}

// Detectar ciclo no grafo
function temCiclo(vertices, edges) {
  let ds = new DisjointSet(vertices);

  for (let edge of edges) {
    let u = edge.u;
    let v = edge.v;

    if (ds.find(u) === ds.find(v)) {
      return true;
    }

    ds.union(u, v);
  }

  return false;
}

// Teste do algoritmo

let vertices = 6;

let edges = [
  { u: 0, v: 1, weight: 4 },
  { u: 0, v: 2, weight: 3 },
  { u: 1, v: 2, weight: 1 },
  { u: 1, v: 3, weight: 2 },
  { u: 2, v: 3, weight: 4 },
  { u: 3, v: 4, weight: 2 },
  { u: 4, v: 5, weight: 6 },
];

// Executar Kruskal
let resultado = kruskal(vertices, edges);

console.log("Árvore Geradora Mínima (Kruskal):");

for (let edge of resultado.mst) {
  console.log(edge.u + " - " + edge.v + " peso: " + edge.weight);
}

console.log("Custo total:", resultado.custoTotal);

// Testar ciclo
if (temCiclo(vertices, edges)) {
  console.log("O grafo possui ciclo");
} else {
  console.log("O grafo não possui ciclo");
}
