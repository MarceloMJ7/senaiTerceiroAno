// Model de usuários (camada de acesso ao banco). Prepared statements em todas as consultas.
const pool = require("./db");

async function listar() {
  const [linhas] = await pool.query("SELECT * FROM usuarios");
  return linhas;
}

async function buscarPorNome(nome) {
  const [linhas] = await pool.execute(
    "SELECT * FROM usuarios WHERE nome LIKE ?",
    [`%${nome}%`]
  );
  return linhas;
}

async function inserir(nome, email) {
  const [r] = await pool.execute(
    "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
    [nome, email]
  );
  return r.insertId;
}

async function atualizarNome(id, nome) {
  const [r] = await pool.execute("UPDATE usuarios SET nome = ? WHERE id = ?", [
    nome,
    id,
  ]);
  return r.affectedRows;
}

async function deletar(id) {
  const [r] = await pool.execute("DELETE FROM usuarios WHERE id = ?", [id]);
  return r.affectedRows;
}

module.exports = { listar, buscarPorNome, inserir, atualizarNome, deletar };
