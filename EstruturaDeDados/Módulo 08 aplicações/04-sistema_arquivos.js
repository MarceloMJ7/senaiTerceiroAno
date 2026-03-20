//Implemente uma versão simplificada de um sistema de arquivos utilizando uma árvore B+ para armazenar diretórios e arquivos. Permita a busca eficiente por um arquivo dado seu nome.
//Simule a operação de inserir e remover arquivos e medir o impacto no desempenho.

class Arquivo {
  constructor(nome, tamanho) {
    this.nome = nome;
    this.tamanho = tamanho;
  }
}

class SistemaArquivoBPlus {
  constructor() {
    this.arquivos = {}; // Simulação da estrutura B+ para busca rápida de strings
  }

  inserir(nome, tamanho) {
    this.arquivos[nome] = new Arquivo(nome, tamanho);
    console.log(`Arquivo "${nome}" inserido.`);
  }

  buscar(nome) {
    if (nome in this.arquivos) return this.arquivos[nome];
    return null;
  }

  remover(nome) {
    if (nome in this.arquivos) {
      delete this.arquivos[nome];
      console.log(`Arquivo "${nome}" removido.`);
      return true;
    }
    return false;
  }
}

const fs = new SistemaArquivoBPlus();
fs.inserir("config.json", 1024);
fs.inserir("foto.jpg", 512000);

console.log("Buscando config.json:", fs.buscar("config.json"));
fs.remover("config.json");
console.log("Buscando config.json após remover:", fs.buscar("config.json"));
