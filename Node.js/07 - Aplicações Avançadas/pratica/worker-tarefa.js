// Tarefa pesada de CPU executada dentro de um Worker Thread.
const { parentPort, workerData } = require("worker_threads");

function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}

const resultado = fibonacci(workerData);
parentPort.postMessage(resultado);
