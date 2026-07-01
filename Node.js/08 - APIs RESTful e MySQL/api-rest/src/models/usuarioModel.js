// Camada de acesso ao banco (model). Prepared statements em tudo.
const pool = require("../db");

// Listagem com filtro por nome e paginação.
async function listar({ pagina = 1, limite = 10, nome = "" }) {
  const offset = (pagina - 1) * limite;
  const [linhas] = await pool.query(
    "SELECT * FROM usuarios WHERE nome LIKE ? ORDER BY id LIMIT ? OFFSET ?",
    [`%${nome}%`, limite, offset]
  );
  return linhas;
}

async function buscarPorId(id) {
  const [linhas] = await pool.execute("SELECT * FROM usuarios WHERE id = ?", [id]);
  return linhas[0];
}

async function inserir(nome, email) {
  const [r] = await pool.execute(
    "INSERT INTO usuarios (nome, email) VALUES (?, ?)",
    [nome, email]
  );
  return r.insertId;
}

async function atualizar(id, nome, email) {
  const [r] = await pool.execute(
    "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?",
    [nome, email, id]
  );
  return r.affectedRows;
}

async function deletar(id) {
  const [r] = await pool.execute("DELETE FROM usuarios WHERE id = ?", [id]);
  return r.affectedRows;
}

module.exports = { listar, buscarPorId, inserir, atualizar, deletar };
