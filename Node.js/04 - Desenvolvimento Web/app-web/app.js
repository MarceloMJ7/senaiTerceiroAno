// API Express com middleware de log, CRUD de usuários e tratamento de erros.
require("dotenv").config();
const express = require("express");
const usuarios = require("./usuariosModel");

const app = express();
app.use(express.json());

// Middleware global: registra o método HTTP e a URL de cada requisição.
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Rota inicial
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Lista todos os usuários
app.get("/usuarios", async (req, res) => {
  try {
    res.json(await usuarios.listar());
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

// Busca usuários por nome (prepared statement)
app.get("/usuarios/busca", async (req, res) => {
  try {
    res.json(await usuarios.buscarPorNome(req.query.nome || ""));
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

// Cria um usuário
app.post("/usuarios", async (req, res) => {
  try {
    const { nome, email } = req.body;
    const id = await usuarios.inserir(nome, email);
    res.status(201).json({ id, nome, email });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

// Atualiza o nome de um usuário pelo ID
app.put("/usuarios/:id", async (req, res) => {
  try {
    const alterados = await usuarios.atualizarNome(req.params.id, req.body.nome);
    res.json({ alterados });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

// Exclui um usuário pelo ID
app.delete("/usuarios/:id", async (req, res) => {
  try {
    const removidos = await usuarios.deletar(req.params.id);
    res.json({ removidos });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor em http://localhost:${PORT}`));
