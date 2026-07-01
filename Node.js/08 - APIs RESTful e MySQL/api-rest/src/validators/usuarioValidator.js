// Validação de dados com Joi.
const Joi = require("joi");

const usuarioSchema = Joi.object({
  nome: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
});

module.exports = { usuarioSchema };
