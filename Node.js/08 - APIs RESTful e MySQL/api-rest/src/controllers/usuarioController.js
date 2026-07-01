// Camada de controle: recebe a requisição, valida e chama o model.
const model = require("../models/usuarioModel");
const { usuarioSchema } = require("../validators/usuarioValidator");

async function listar(req, res) {
  try {
    const pagina = parseInt(req.query.pagina, 10) || 1;
    const limite = parseInt(req.query.limite, 10) || 10;
    const nome = req.query.nome || "";
    res.json(await model.listar({ pagina, limite, nome }));
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

async function criar(req, res) {
  const { error, value } = usuarioSchema.validate(req.body);
  if (error) return res.status(400).json({ erro: error.details[0].message });
  try {
    const id = await model.inserir(value.nome, value.email);
    res.status(201).json({ id, ...value });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

async function atualizar(req, res) {
  const { error, value } = usuarioSchema.validate(req.body);
  if (error) return res.status(400).json({ erro: error.details[0].message });
  try {
    const alterados = await model.atualizar(req.params.id, value.nome, value.email);
    if (!alterados) return res.status(404).json({ erro: "Usuário não encontrado" });
    res.json({ id: Number(req.params.id), ...value });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

async function remover(req, res) {
  try {
    const removidos = await model.deletar(req.params.id);
    if (!removidos) return res.status(404).json({ erro: "Usuário não encontrado" });
    res.status(204).end();
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
}

module.exports = { listar, criar, atualizar, remover };
