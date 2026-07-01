// Atividade prática — Criação de eventos simples.
// Emite o evento "hello": sem nome responde "Hello, World!"; com nome, personaliza.
const EventEmitter = require("events");
const emissor = new EventEmitter();

emissor.on("hello", (nome) => {
  if (nome) {
    console.log(`Hello, ${nome}!`);
  } else {
    console.log("Hello, World!");
  }
});

emissor.emit("hello");
emissor.emit("hello", "Cauê");
