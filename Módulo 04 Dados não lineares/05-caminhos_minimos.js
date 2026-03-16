//Implemente o algoritmo de Dijkstra para um grafo ponderado e calcule o caminho mais curto de um vértice para os demais.
//Utilize o algoritmo de Floyd-Warshall para calcular o caminho mais curto entre todos os pares de nós em um grafo.

// ---------------------------------------------------
// GRAFO PONDERADO + DIJKSTRA
// ---------------------------------------------------

class GrafoDijkstra {
  constructor() {
    this.vertices = {};
  }

  adicionarVertice(v) {
    this.vertices[v] = [];
  }

  adicionarAresta(origem, destino, peso) {
    this.vertices[origem].push({
      no: destino,
      peso: peso,
    });
  }

  dijkstra(inicio) {
    let distancias = {};
    let visitado = new Set();

    for (let vertice in this.vertices) {
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

      for (let vizinho of this.vertices[menor]) {
        let novaDistancia = distancias[menor] + vizinho.peso;

        if (novaDistancia < distancias[vizinho.no]) {
          distancias[vizinho.no] = novaDistancia;
        }
      }
    }

    return distancias;
  }
}

// ---------------------------------------------------
// FLOYD-WARSHALL
// ---------------------------------------------------

function floydWarshall(grafo) {
  let vertices = Object.keys(grafo);
  let dist = {};

  for (let i of vertices) {
    dist[i] = {};

    for (let j of vertices) {
      if (i === j) {
        dist[i][j] = 0;
      } else if (grafo[i][j] !== undefined) {
        dist[i][j] = grafo[i][j];
      } else {
        dist[i][j] = Infinity;
      }
    }
  }

  for (let k of vertices) {
    for (let i of vertices) {
      for (let j of vertices) {
        if (dist[i][k] + dist[k][j] < dist[i][j]) {
          dist[i][j] = dist[i][k] + dist[k][j];
        }
      }
    }
  }

  return dist;
}

// ---------------------------------------------------
// TESTANDO DIJKSTRA
// ---------------------------------------------------

const grafo = new GrafoDijkstra();

grafo.adicionarVertice("A");
grafo.adicionarVertice("B");
grafo.adicionarVertice("C");
grafo.adicionarVertice("D");
grafo.adicionarVertice("E");
grafo.adicionarVertice("F");

grafo.adicionarAresta("A", "B", 4);
grafo.adicionarAresta("A", "C", 2);
grafo.adicionarAresta("B", "C", 5);
grafo.adicionarAresta("B", "D", 10);
grafo.adicionarAresta("C", "E", 3);
grafo.adicionarAresta("E", "D", 4);
grafo.adicionarAresta("D", "F", 11);

console.log("Menor caminho a partir de A (Dijkstra):");
console.log(grafo.dijkstra("A"));

// ---------------------------------------------------
// TESTANDO FLOYD-WARSHALL
// ---------------------------------------------------

let grafoFW = {
  A: { B: 3, C: 8, E: -4 },
  B: { D: 1, E: 7 },
  C: { B: 4 },
  D: { A: 2, C: -5 },
  E: { D: 6 },
};

console.log("Menor caminho entre todos os pares (Floyd-Warshall):");
console.log(floydWarshall(grafoFW));
