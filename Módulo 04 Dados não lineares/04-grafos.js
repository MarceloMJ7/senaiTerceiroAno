//Crie um grafo simples utilizando uma lista de adjacência e implemente os algoritmos de busca DFS e BFS.
//Modifique o grafo para ser direcionado e implemente o algoritmo de Dijkstra para encontrar o caminho mais curto entre dois nós.

// ------------------------------
// GRAFO SIMPLES (Lista de Adjacência)
// ------------------------------

class Grafo {
  constructor() {
    this.lista = {};
  }

  adicionarVertice(vertice) {
    if (!this.lista[vertice]) {
      this.lista[vertice] = [];
    }
  }

  adicionarAresta(v1, v2) {
    this.lista[v1].push(v2);
    this.lista[v2].push(v1);
  }

  // ------------------------------
  // DFS - Depth First Search
  // ------------------------------

  dfs(inicio, visitado = new Set()) {
    visitado.add(inicio);

    console.log(inicio);

    for (let vizinho of this.lista[inicio]) {
      if (!visitado.has(vizinho)) {
        this.dfs(vizinho, visitado);
      }
    }
  }

  // ------------------------------
  // BFS - Breadth First Search
  // ------------------------------

  bfs(inicio) {
    let fila = [inicio];
    let visitado = new Set();

    visitado.add(inicio);

    while (fila.length > 0) {
      let vertice = fila.shift();

      console.log(vertice);

      for (let vizinho of this.lista[vertice]) {
        if (!visitado.has(vizinho)) {
          visitado.add(vizinho);
          fila.push(vizinho);
        }
      }
    }
  }
}

// ------------------------------
// GRAFO DIRECIONADO COM PESO
// (DIJKSTRA)
// ------------------------------

class GrafoDijkstra {
  constructor() {
    this.lista = {};
  }

  adicionarVertice(v) {
    if (!this.lista[v]) {
      this.lista[v] = [];
    }
  }

  adicionarAresta(origem, destino, peso) {
    this.lista[origem].push({
      no: destino,
      peso: peso,
    });
  }

  dijkstra(inicio) {
    let distancias = {};
    let visitado = new Set();
    let anterior = {};

    for (let vertice in this.lista) {
      distancias[vertice] = Infinity;
    }

    distancias[inicio] = 0;

    while (true) {
      let menor = null;

      for (let vertice in distancias) {
        if (!visitado.has(vertice)) {
          if (menor === null || distancias[vertice] < distancias[menor]) {
            menor = vertice;
          }
        }
      }

      if (menor === null) break;

      visitado.add(menor);

      for (let vizinho of this.lista[menor]) {
        let novaDistancia = distancias[menor] + vizinho.peso;

        if (novaDistancia < distancias[vizinho.no]) {
          distancias[vizinho.no] = novaDistancia;
          anterior[vizinho.no] = menor;
        }
      }
    }

    return distancias;
  }
}

// ------------------------------
// TESTE DO GRAFO SIMPLES
// ------------------------------

const g = new Grafo();

g.adicionarVertice("A");
g.adicionarVertice("B");
g.adicionarVertice("C");
g.adicionarVertice("D");

g.adicionarAresta("A", "B");
g.adicionarAresta("A", "C");
g.adicionarAresta("B", "D");
g.adicionarAresta("C", "D");

console.log("DFS:");
g.dfs("A");

console.log("BFS:");
g.bfs("A");

// ------------------------------
// TESTE DO DIJKSTRA
// ------------------------------

const grafo = new GrafoDijkstra();

grafo.adicionarVertice("A");
grafo.adicionarVertice("B");
grafo.adicionarVertice("C");
grafo.adicionarVertice("D");
grafo.adicionarVertice("E");

grafo.adicionarAresta("A", "B", 4);
grafo.adicionarAresta("A", "C", 2);
grafo.adicionarAresta("B", "D", 5);
grafo.adicionarAresta("C", "D", 8);
grafo.adicionarAresta("C", "E", 10);
grafo.adicionarAresta("D", "E", 2);

console.log("Menores distâncias a partir de A:");
console.log(grafo.dijkstra("A"));
