const express = require("express");
const Joi = require("joi");
const model = require("../models/movimentacaoModel");
const { autenticar } = require("../auth");

const router = express.Router();

const schema = Joi.object({
  produtoId: Joi.number().integer().required(),
  tipo: Joi.string().valid("entrada", "saida").required(),
  quantidade: Joi.number().integer().min(1).required(),
});

// Registra uma entrada ou saída de estoque.
router.post("/", autenticar, async (req, res) => {
  const { error, value } = schema.validate(req.body);
  if (error) return res.status(400).json({ erro: error.details[0].message });
  try {
    const quantidadeAtual = await model.registrar(value);
    res.status(201).json({ mensagem: "Movimentação registrada", quantidadeAtual });
  } catch (erro) {
    res.status(400).json({ erro: erro.message });
  }
});

module.exports = router;
