// Atividade prática — Um evento com dois listeners:
// um salva os dados em arquivo, o outro exibe no console.
const EventEmitter = require("events");
const fs = require("fs");
const emissor = new EventEmitter();

emissor.on("dataReceived", (dado) => {
  fs.appendFileSync("dados.log", dado + "\n");
});

emissor.on("dataReceived", (dado) => {
  console.log("Dado recebido:", dado);
});

emissor.emit("dataReceived", "registro 1");
emissor.emit("dataReceived", "registro 2");
console.log("Dados tambem gravados em dados.log");
