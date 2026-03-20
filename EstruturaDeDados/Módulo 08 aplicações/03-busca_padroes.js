//Implemente o algoritmo de força bruta para buscar um padrão em um texto. Teste com textos grandes e pequenos.
//○ Implemente o Algoritmo KMP e compare o desempenho com o algoritmo de força bruta usando o mesmo texto e padrão.

function buscarPadraoSimples(texto, padrao) {
  let indices = [];
  for (let i = 0; i <= texto.length - padrao.length; i++) {
    let j;
    for (j = 0; j < padrao.length; j++) {
      if (texto[i + j] !== padrao[j]) break;
    }
    if (j === padrao.length) indices.push(i);
  }
  return indices;
}

function buscarKMP(texto, padrao) {
  let n = texto.length,
    m = padrao.length;
  let lps = Array(m).fill(0);
  computeLPS(padrao, m, lps);

  let indices = [],
    i = 0,
    j = 0;
  while (i < n) {
    if (padrao[j] === texto[i]) {
      i++;
      j++;
    }
    if (j === m) {
      indices.push(i - j);
      j = lps[j - 1];
    } else if (i < n && padrao[j] !== texto[i]) {
      if (j !== 0) j = lps[j - 1];
      else i++;
    }
  }
  return indices;
}

function computeLPS(padrao, m, lps) {
  let len = 0,
    i = 1;
  while (i < m) {
    if (padrao[i] === padrao[len]) {
      len++;
      lps[i] = len;
      i++;
    } else {
      if (len !== 0) len = lps[len - 1];
      else {
        lps[i] = 0;
        i++;
      }
    }
  }
}

const textoLongo = "ABABDABACDABABCABAB".repeat(100);
const padrao = "ABABCABAB";

console.time("Brute Force Search");
buscarPadraoSimples(textoLongo, padrao);
console.timeEnd("Brute Force Search");

console.time("KMP Search");
buscarKMP(textoLongo, padrao);
console.timeEnd("KMP Search");
