// Atividade prática — Sistema de registro de log com níveis info, warn e error.
const EventEmitter = require("events");
const logger = new EventEmitter();

logger.on("log", (nivel, mensagem) => {
  const hora = new Date().toISOString();
  console.log(`[${hora}] ${nivel.toUpperCase()}: ${mensagem}`);
});

logger.emit("log", "info", "Aplicacao iniciada");
logger.emit("log", "warn", "Uso de memoria acima do esperado");
logger.emit("log", "error", "Falha ao conectar no banco de dados");
