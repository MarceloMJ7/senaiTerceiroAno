//Implemente uma função de hash simples que recebe uma chave inteira e retorna um índice em uma tabela de tamanho 10.
// Modifique a função para que funcione com strings, somando os valores ASCII dos caracteres e utilizando o operador módulo

// hash para inteiros
function hashInteiro(chave) {
  let tamanhoTabela = 10;

  return chave % tamanhoTabela;
}

// hash para strings
function hashString(chave) {
  let tamanhoTabela = 10;
  let soma = 0;

  for (let i = 0; i < chave.length; i++) {
    soma += chave.charCodeAt(i);
  }

  return soma % tamanhoTabela;
}

// testes

console.log("Hash inteiro:");
console.log(hashInteiro(15));
console.log(hashInteiro(27));
console.log(hashInteiro(103));

console.log("Hash string:");
console.log(hashString("Ana"));
console.log(hashString("Carlos"));
console.log(hashString("Maria"));
