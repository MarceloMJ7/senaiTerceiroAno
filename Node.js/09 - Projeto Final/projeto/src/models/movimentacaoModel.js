const pool = require("../db");

// Registra uma entrada/saída e atualiza a quantidade do produto — tudo numa transação.
async function registrar({ produtoId, tipo, quantidade }) {
  const conexao = await pool.getConnection();
  try {
    await conexao.beginTransaction();

    const [produtos] = await conexao.execute(
      "SELECT quantidade FROM produtos WHERE id = ? FOR UPDATE",
      [produtoId]
    );
    if (produtos.length === 0) throw new Error("Produto não encontrado");

    const atual = produtos[0].quantidade;
    const nova = tipo === "entrada" ? atual + quantidade : atual - quantidade;
    if (nova < 0) throw new Error("Estoque insuficiente para a saída");

    await conexao.execute("UPDATE produtos SET quantidade = ? WHERE id = ?", [nova, produtoId]);
    await conexao.execute(
      "INSERT INTO movimentacoes (produto_id, tipo, quantidade) VALUES (?, ?, ?)",
      [produtoId, tipo, quantidade]
    );

    await conexao.commit();
    return nova;
  } catch (erro) {
    await conexao.rollback();
    throw erro;
  } finally {
    conexao.release();
  }
}

module.exports = { registrar };
