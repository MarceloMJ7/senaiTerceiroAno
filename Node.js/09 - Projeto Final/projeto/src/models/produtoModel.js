const pool = require("../db");

async function listar() {
  const [linhas] = await pool.query("SELECT * FROM produtos ORDER BY nome");
  return linhas;
}

async function buscarPorId(id) {
  const [linhas] = await pool.execute("SELECT * FROM produtos WHERE id = ?", [id]);
  return linhas[0];
}

async function inserir({ nome, categoria, preco, quantidade }) {
  const [r] = await pool.execute(
    "INSERT INTO produtos (nome, categoria, preco, quantidade) VALUES (?, ?, ?, ?)",
    [nome, categoria, preco, quantidade]
  );
  return r.insertId;
}

async function atualizar(id, { nome, categoria, preco, quantidade }) {
  const [r] = await pool.execute(
    "UPDATE produtos SET nome = ?, categoria = ?, preco = ?, quantidade = ? WHERE id = ?",
    [nome, categoria, preco, quantidade, id]
  );
  return r.affectedRows;
}

async function deletar(id) {
  const [r] = await pool.execute("DELETE FROM produtos WHERE id = ?", [id]);
  return r.affectedRows;
}

// Relatório: produtos com estoque abaixo de um limite.
async function estoqueBaixo(limite = 5) {
  const [linhas] = await pool.execute(
    "SELECT * FROM produtos WHERE quantidade < ? ORDER BY quantidade",
    [limite]
  );
  return linhas;
}

module.exports = { listar, buscarPorId, inserir, atualizar, deletar, estoqueBaixo };
