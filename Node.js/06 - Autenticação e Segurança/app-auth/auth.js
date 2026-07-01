// Middlewares de autenticação (JWT) e autorização (roles).
const jwt = require("jsonwebtoken");
const SEGREDO = process.env.JWT_SECRET || "segredo_dev";

function autenticarJWT(req, res, next) {
  const cabecalho = req.get("authorization");
  const token = (cabecalho && cabecalho.split(" ")[1]) || (req.cookies && req.cookies.token);

  if (!token) {
    return res.status(401).json({ erro: "Token não fornecido" });
  }

  try {
    req.usuario = jwt.verify(token, SEGREDO);
    next();
  } catch (erro) {
    res.status(401).json({ erro: "Token inválido ou expirado" });
  }
}

function autorizarRole(role) {
  return (req, res, next) => {
    if (!req.usuario || req.usuario.role !== role) {
      return res.status(403).json({ erro: "Acesso negado: permissão insuficiente" });
    }
    next();
  };
}

module.exports = { autenticarJWT, autorizarRole };
