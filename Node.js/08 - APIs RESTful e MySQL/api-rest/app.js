// API RESTful com estrutura em camadas, validação, paginação e documentação Swagger.
require("dotenv").config();
const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerDoc = require("./swagger.json");
const usuarioRoutes = require("./src/routes/usuarioRoutes");

const app = express();
app.use(express.json());

// Middleware global: registra o log de cada requisição recebida.
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.originalUrl}`);
  next();
});

app.use("/api/usuarios", usuarioRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDoc));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API em http://localhost:${PORT} (docs em /api-docs)`));
