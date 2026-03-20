//Implemente uma solução de força bruta para o Problema do Caixeiro Viajante e teste em um conjunto pequeno de cidades (máximo de 5 cidades).
//○ Implemente o Algoritmo de Vizinho Mais Próximo para resolver o TSP e compare o resultado com a solução exata para um conjunto de 10 cidades.

function tspForcaBruta(matriz) {
  let n = matriz.length;
  let cidades = [...Array(n).keys()];
  let menorDistancia = Infinity;
  let melhorCaminho = [];

  function permutar(arr, m = []) {
    if (arr.length === 0) {
      let d = calcularDistancia(m);
      if (d < menorDistancia) {
        menorDistancia = d;
        melhorCaminho = m;
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permutar(curr.slice(), m.concat(next));
      }
    }
  }

  function calcularDistancia(caminho) {
    let d = 0;
    for (let i = 0; i < caminho.length - 1; i++) {
      d += matriz[caminho[i]][caminho[i + 1]];
    }
    d += matriz[caminho[caminho.length - 1]][caminho[0]];
    return d;
  }

  permutar(cidades);
  return { menorDistancia, melhorCaminho };
}

function tspVizinhoMaisProximo(matriz) {
  let n = matriz.length;
  let visitados = new Array(n).fill(false);
  let caminho = [0];
  visitados[0] = true;
  let distTotal = 0;

  for (let i = 0; i < n - 1; i++) {
    let atual = caminho[caminho.length - 1];
    let prox = -1;
    let menorDist = Infinity;
    for (let j = 0; j < n; j++) {
      if (!visitados[j] && matriz[atual][j] < menorDist) {
        menorDist = matriz[atual][j];
        prox = j;
      }
    }
    caminho.push(prox);
    visitados[prox] = true;
    distTotal += menorDist;
  }
  distTotal += matriz[caminho[caminho.length - 1]][caminho[0]];
  return { distTotal, caminho };
}

const nCidades = 5;
const matriz5 = [
  [0, 10, 15, 20, 25],
  [10, 0, 35, 25, 30],
  [15, 35, 0, 30, 20],
  [20, 25, 30, 0, 15],
  [25, 30, 20, 15, 0],
];

console.log("TSP Forca Bruta (5 cidades):", tspForcaBruta(matriz5));
console.log(
  "TSP Vizinho Mais Próximo (5 cidades):",
  tspVizinhoMaisProximo(matriz5),
);
