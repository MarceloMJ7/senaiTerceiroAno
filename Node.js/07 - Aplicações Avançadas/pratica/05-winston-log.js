// Exercício — logger com Winston registrando em arquivo e no console.
// Requer: npm install winston
const winston = require("winston");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: "app.log" }),
  ],
});

logger.info("Aplicacao iniciada");
logger.warn("Aviso: uso de memoria elevado");
logger.error("Erro: falha ao processar a requisicao");
