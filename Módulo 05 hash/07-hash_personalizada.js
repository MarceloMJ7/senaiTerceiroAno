//Crie uma função de hash para strings que distribua os valores uniformemente para uma tabela de tamanho 100. Teste a função com diferentes conjuntos
//de dados e observe a distribuição dos índices gerados. ○ Qual a proporção de colisões que você observa? Como você ajustaria a
//função para melhorar a distribuição?

const TAMANHO_TABELA = 100;

// função hash para strings
function hashString(str) {
  let hash = 0;

  for (let i = 0; i < str.length; i++) {
    hash = (hash * 31 + str.charCodeAt(i)) % TAMANHO_TABELA;
  }

  return hash;
}

// TESTE DE DISTRIBUIÇÃO

function testarDistribuicao(lista) {
  let tabela = new Array(TAMANHO_TABELA).fill(0);

  let colisoes = 0;

  for (let palavra of lista) {
    let indice = hashString(palavra);

    if (tabela[indice] > 0) {
      colisoes++;
    }

    tabela[indice]++;
  }

  console.log("Total de elementos:", lista.length);
  console.log("Colisões:", colisoes);

  let proporcao = (colisoes / lista.length) * 100;

  console.log("Proporção de colisões:", proporcao.toFixed(2) + "%");

  console.log("Distribuição dos índices:");
  console.log(tabela);
}

// CONJUNTO DE TESTE

let palavras = [
  "casa",
  "carro",
  "computador",
  "programacao",
  "algoritmo",
  "estrutura",
  "dados",
  "arvore",
  "fila",
  "pilha",
  "hash",
  "grafo",
  "lista",
  "vetor",
  "memoria",
  "sistema",
  "internet",
  "rede",
  "software",
  "hardware",
  "javascript",
  "java",
  "python",
  "codigo",
  "variavel",
  "funcao",
  "classe",
  "objeto",
  "loop",
  "condicao",
];

// gerar mais palavras aleatórias
for (let i = 0; i < 200; i++) {
  palavras.push("palavra" + i);
}

// executar teste
testarDistribuicao(palavras);
