const pool = require("./src/db");

async function criarTabela() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      email VARCHAR(150) NOT NULL UNIQUE
    )
  `);
  console.log("Tabela 'usuarios' pronta.");
  await pool.end();
}

criarTabela().catch((erro) => {
  console.error("Erro:", erro.message);
  process.exit(1);
});
