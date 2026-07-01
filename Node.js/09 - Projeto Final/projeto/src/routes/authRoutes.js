const express = require("express");
const jwt = require("jsonwebtoken");
const pool = require("../db");
const { SEGREDO } = require("../auth");

const router = express.Router();

// Login: valida credenciais (prepared statement) e emite um JWT.
router.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  try {
    const [linhas] = await pool.execute(
      "SELECT id, nome, role FROM usuarios WHERE email = ? AND senha = ?",
      [email, senha]
    );
    if (linhas.length === 0) {
      return res.status(401).json({ erro: "Credenciais inválidas" });
    }
    const usuario = linhas[0];
    const token = jwt.sign({ id: usuario.id, role: usuario.role }, SEGREDO, {
      expiresIn: "1h",
    });
    res.json({ token, usuario });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

module.exports = router;
