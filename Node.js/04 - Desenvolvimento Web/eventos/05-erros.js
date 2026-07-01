// Atividade prática — Gerenciamento de erros com o evento "error".
const EventEmitter = require("events");
const emissor = new EventEmitter();

// Sem este listener, emitir "error" derrubaria a aplicação.
emissor.on("error", (erro) => {
  console.error("Erro tratado:", erro.message);
});

emissor.emit("error", new Error("Algo deu errado no processamento"));
console.log("A aplicacao continua rodando normalmente.");
