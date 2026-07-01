// API com autenticação JWT, autorização por roles, CORS, cookies seguros e proteção CSRF.
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const pool = require("./db");
const { autenticarJWT, autorizarRole } = require("./auth");

const app = express();
const SEGREDO = process.env.JWT_SECRET || "segredo_dev";

app.use(express.json());
app.use(cookieParser());

// CORS: libera apenas a origem configurada.
app.use(cors({
  origin: process.env.ORIGEM_PERMITIDA || "http://localhost:5173",
  credentials: true,
}));

// Login: valida credenciais com prepared statement e emite um JWT.
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  try {
    const [linhas] = await pool.execute(
      "SELECT id, nome, email, role FROM usuarios WHERE email = ? AND senha = ?",
      [email, senha]
    );
    if (linhas.length === 0) {
      return res.status(401).json({ erro: "Credenciais inválidas" });
    }
    const usuario = linhas[0];
    const token = jwt.sign({ id: usuario.id, role: usuario.role }, SEGREDO, { expiresIn: "1h" });

    // Cookie seguro: HttpOnly (não lido por JS) e Secure (só HTTPS em produção).
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.json({ token, usuario });
  } catch (erro) {
    res.status(500).json({ erro: erro.message });
  }
});

// Rota protegida: exige JWT válido.
app.get("/perfil", autenticarJWT, (req, res) => {
  res.json({ mensagem: "Rota protegida acessada", usuario: req.usuario });
});

// Rota restrita por role: só administradores.
app.get("/admin", autenticarJWT, autorizarRole("admin"), (req, res) => {
  res.json({ mensagem: "Bem-vindo à área do administrador" });
});

// --- Proteção CSRF (padrão double-submit cookie) ---
// 1) O cliente pede um token, que é guardado num cookie e também devolvido no corpo.
app.get("/csrf-token", (req, res) => {
  const token = crypto.randomBytes(24).toString("hex");
  res.cookie("csrfToken", token, { sameSite: "strict" });
  res.json({ csrfToken: token });
});

// 2) Na ação sensível, o token do cookie precisa bater com o enviado no cabeçalho.
// Uma requisição forjada por outro site não conhece o token -> é bloqueada.
app.post("/acao-sensivel", (req, res) => {
  const doCookie = req.cookies.csrfToken;
  const doHeader = req.get("x-csrf-token");
  if (!doCookie || doCookie !== doHeader) {
    return res.status(403).json({ erro: "Token CSRF inválido — requisição bloqueada" });
  }
  res.json({ mensagem: "Ação sensível executada com sucesso" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Auth em http://localhost:${PORT}`));
