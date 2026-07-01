// Sistema de Controle de Estoque — API Node.js + Express + MySQL.
require("dotenv").config();
const express = require("express");
const authRoutes = require("./src/routes/authRoutes");
const produtoRoutes = require("./src/routes/produtoRoutes");
const movimentacaoRoutes = require("./src/routes/movimentacaoRoutes");

const app = express();
app.use(express.json());

// Log de cada requisição.
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
  next();
});

app.use("/api/auth", authRoutes);
app.use("/api/produtos", produtoRoutes);
app.use("/api/movimentacoes", movimentacaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Controle de Estoque em http://localhost:${PORT}`));
