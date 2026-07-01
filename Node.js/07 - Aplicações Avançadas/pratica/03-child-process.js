// Exercício — processo filho executando um comando do sistema operacional.
const { exec } = require("child_process");

exec("node --version", (erro, stdout, stderr) => {
  if (erro) {
    console.error("Erro ao executar o comando:", erro.message);
    return;
  }
  console.log("Versao do Node (obtida via processo filho):", stdout.trim());
});
