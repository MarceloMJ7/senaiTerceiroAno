// Aplicação SSR com Express + EJS.
require("dotenv").config();
const express = require("express");
const path = require("path");
const pool = require("./db");

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

// Menu dinâmico, disponível em todas as páginas.
const menu = [
  { titulo: "Início", url: "/" },
  { titulo: "Usuários", url: "/usuarios" },
  { titulo: "Novo", url: "/usuarios/novo" },
  { titulo: "API externa", url: "/externo" },
  { titulo: "Sobre", url: "/about" },
];

app.get("/", (req, res) => {
  res.render("home", { titulo: "Início", menu });
});

// Lista usuários vindos do MySQL.
app.get("/usuarios", async (req, res) => {
  try {
    const [usuarios] = await pool.query("SELECT * FROM usuarios");
    res.render("usuarios", { titulo: "Usuários", menu, usuarios, erro: null });
  } catch (erro) {
    res.render("usuarios", { titulo: "Usuários", menu, usuarios: [], erro: erro.message });
  }
});

// Formulário de cadastro.
app.get("/usuarios/novo", (req, res) => {
  res.render("novo", { titulo: "Novo usuário", menu, erros: [], dados: {} });
});

// Recebe o formulário, valida e insere no MySQL.
app.post("/usuarios", async (req, res) => {
  const { nome, email } = req.body;
  const erros = [];
  if (!nome || nome.trim().length < 2) erros.push("O nome deve ter ao menos 2 caracteres.");
  if (!email || !email.includes("@")) erros.push("Informe um e-mail válido.");

  if (erros.length > 0) {
    return res.render("novo", { titulo: "Novo usuário", menu, erros, dados: { nome, email } });
  }

  try {
    await pool.execute("INSERT INTO usuarios (nome, email) VALUES (?, ?)", [nome, email]);
    res.redirect("/usuarios");
  } catch (erro) {
    res.render("novo", { titulo: "Novo usuário", menu, erros: [erro.message], dados: { nome, email } });
  }
});

// Integra uma API externa (JSONPlaceholder) e exibe no template.
app.get("/externo", async (req, res) => {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const externos = await resposta.json();
    res.render("externo", { titulo: "API externa", menu, externos });
  } catch (erro) {
    res.render("externo", { titulo: "API externa", menu, externos: [] });
  }
});

// Página estática renderizada no servidor (SSR).
app.get("/about", (req, res) => {
  res.render("about", { titulo: "Sobre", menu });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`SSR em http://localhost:${PORT}`));
