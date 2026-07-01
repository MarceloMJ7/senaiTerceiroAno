// Exercício — Worker Thread executando uma tarefa pesada fora do thread principal.
const { Worker } = require("worker_threads");

console.log("Thread principal continua livre enquanto o worker calcula...");

const worker = new Worker("./worker-tarefa.js", { workerData: 40 });

worker.on("message", (resultado) => {
  console.log("Resultado vindo do worker:", resultado);
});
worker.on("error", (erro) => console.error("Erro no worker:", erro.message));
worker.on("exit", (codigo) => console.log("Worker finalizado (codigo", codigo + ")"));
