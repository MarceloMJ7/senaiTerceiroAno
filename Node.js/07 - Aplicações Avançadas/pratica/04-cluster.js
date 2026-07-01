// Exercício — cluster que aproveita todos os núcleos do processador.
const cluster = require("cluster");
const http = require("http");
const os = require("os");

if (cluster.isPrimary) {
  const nucleos = os.cpus().length;
  console.log(`Processo principal ${process.pid} criando ${nucleos} workers`);
  for (let i = 0; i < nucleos; i++) {
    cluster.fork();
  }
  cluster.on("exit", (worker) => {
    console.log(`Worker ${worker.process.pid} encerrado`);
  });
} else {
  http
    .createServer((req, res) => {
      res.end(`Resposta do worker ${process.pid}\n`);
    })
    .listen(3000);
  console.log(`Worker ${process.pid} ouvindo na porta 3000`);
}
