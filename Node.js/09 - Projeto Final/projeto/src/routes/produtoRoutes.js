const express = require("express");
const Joi = require("joi");
const model = require("../models/produtoModel");
const { autenticar, autorizar } = require("../auth");

const router = express.Router();

const schema = Joi.object({
  nome: Joi.string().min(2).required(),
  categoria: Joi.string().allow("").optional(),
  preco: Joi.number().min(0).required(),
  quantidade: Joi.number().integer().min(0).required(),
});

// Lista produtos (qualquer usuário autenticado).
router.get("/", autenticar, async (req, res) => {
  try {
    res.json(await model.listar());
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

// Relatório de estoque baixo.
router.get("/relatorio/estoque-baixo", autenticar, async (req, res) => {
  try {
    const limite = parseInt(req.query.limite, 10) || 5;
    res.json(await model.estoqueBaixo(limite));
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

// Criar / atualizar / excluir: apenas admin.
router.post("/", autenticar, autorizar("admin"), async (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ erro: error.details[0].message });
  try {
    const id = await model.inserir(value);
    res.status(201).json({ id, ...value });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

router.put("/:id", autenticar, autorizar("admin"), async (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ erro: error.details[0].message });
  try {
    const alterados = await model.atualizar(req.params.id, value);
    if (!alterados) return res.status(404).json({ erro: "Produto não encontrado" });
    res.json({ id: Number(req.params.id), ...value });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

router.delete("/:id", autenticar, autorizar("admin"), async (req, res) => {
  try {
    const removidos = await model.deletar(req.params.id);
    if (!removidos) return res.status(404).json({ erro: "Produto não encontrado" });
    res.status(204).end();
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

module.exports = router;
