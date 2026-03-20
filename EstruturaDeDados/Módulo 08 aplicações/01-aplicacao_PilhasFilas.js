class FilaImpressao {
  constructor() {
    this.fila = [];
  }
  adicionarDocumento(doc) {
    this.fila.push(doc);
    console.log(`Documento "${doc}" adicionado à fila.`);
  }
  imprimir() {
    if (this.fila.length === 0) return console.log("Fila de impressão vazia.");
    const doc = this.fila.shift();
    console.log(`Imprimindo: ${doc}`);
  }
}

class NavegadorBrowser {
  constructor() {
    this.atual = null;
    this.pilhaVoltar = [];
    this.pilhaAvancar = [];
  }
  visitar(url) {
    if (this.atual) this.pilhaVoltar.push(this.atual);
    this.atual = url;
    this.pilhaAvancar = [];
    console.log(`Visitando: ${url}`);
  }
  voltar() {
    if (this.pilhaVoltar.length === 0)
      return console.log("Não há páginas para voltar.");
    this.pilhaAvancar.push(this.atual);
    this.atual = this.pilhaVoltar.pop();
    console.log(`Voltando para: ${this.atual}`);
  }
  avancar() {
    if (this.pilhaAvancar.length === 0)
      return console.log("Não há páginas para avançar.");
    this.pilhaVoltar.push(this.atual);
    this.atual = this.pilhaAvancar.pop();
    console.log(`Avançando para: ${this.atual}`);
  }
}

console.log("--- Fila de Impressão ---");
const spooler = new FilaImpressao();
spooler.adicionarDocumento("Relatorio.pdf");
spooler.adicionarDocumento("Foto.png");
spooler.imprimir();

console.log("\n--- Navegação Browser ---");
const browser = new NavegadorBrowser();
browser.visitar("google.com");
browser.visitar("github.com");
browser.voltar();
browser.avancar();
