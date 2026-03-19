//Implemente um grafo não-direcionado para representar uma rede social, onde cada vértice é um usuário e cada aresta representa uma amizade. Utilize a estrutura de lista de adjacência.
//○ Aplique o algoritmo de busca em largura (BFS) para encontrar a menor distância entre dois usuários na rede.

class RedeSocial {
  constructor() {
    this.adj = {};
  }

  adicionarUsuario(u) {
    if (!this.adj[u]) this.adj[u] = [];
  }

  adicionarAmizade(u, v) {
    this.adj[u].push(v);
    this.adj[v].push(u);
  }

  distanciaMinima(inicio, fim) {
    let fila = [[inicio, 0]];
    let visitados = new Set();
    visitados.add(inicio);

    while (fila.length > 0) {
      let [atual, dist] = fila.shift();
      if (atual === fim) return dist;

      this.adj[atual].forEach((vizinho) => {
        if (!visitados.has(vizinho)) {
          visitados.add(vizinho);
          fila.push([vizinho, dist + 1]);
        }
      });
    }
    return -1;
  }
}

const rede = new RedeSocial();
["Alice", "Bob", "Carol", "David", "Eve"].forEach((u) =>
  rede.adicionarUsuario(u),
);
rede.adicionarAmizade("Alice", "Bob");
rede.adicionarAmizade("Bob", "Carol");
rede.adicionarAmizade("Carol", "David");
rede.adicionarAmizade("David", "Eve");
rede.adicionarAmizade("Alice", "Eve"); // Amizade direta

console.log(
  "Distância mínima entre Alice e David:",
  rede.distanciaMinima("Alice", "David"),
);
console.log(
  "Distância mínima entre Alice e Eve:",
  rede.distanciaMinima("Alice", "Eve"),
);
