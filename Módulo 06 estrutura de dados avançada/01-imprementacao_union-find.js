//Implemente uma estrutura de conjuntos disjuntos utilizando path compression e union by rank.
//○ Teste a estrutura resolvendo o problema de identificar componentes conectados em um grafo não direcionado.

// Estrutura de Conjuntos Disjuntos (Union-Find)
class DisjointSet {
  constructor(n) {
    this.parent = new Array(n);
    this.rank = new Array(n);

    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
      this.rank[i] = 0;
    }
  }

  // FIND com Path Compression
  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  // UNION com Union by Rank
  union(x, y) {
    let rootX = this.find(x);
    let rootY = this.find(y);

    if (rootX === rootY) {
      return;
    }

    if (this.rank[rootX] < this.rank[rootY]) {
      this.parent[rootX] = rootY;
    } else if (this.rank[rootX] > this.rank[rootY]) {
      this.parent[rootY] = rootX;
    } else {
      this.parent[rootY] = rootX;
      this.rank[rootX]++;
    }
  }
}

// Teste com Grafo Não Direcionado

let vertices = 7;

// arestas do grafo
let edges = [
  [0, 1],
  [1, 2],
  [3, 4],
  [5, 6],
];

let ds = new DisjointSet(vertices);

// unir vértices conectados
for (let i = 0; i < edges.length; i++) {
  let u = edges[i][0];
  let v = edges[i][1];

  ds.union(u, v);
}

// identificar componentes conectados
let componentes = {};

for (let i = 0; i < vertices; i++) {
  let raiz = ds.find(i);

  if (!componentes[raiz]) {
    componentes[raiz] = [];
  }

  componentes[raiz].push(i);
}

// mostrar resultado
console.log("Componentes conectados do grafo:");

for (let key in componentes) {
  console.log(componentes[key]);
}
