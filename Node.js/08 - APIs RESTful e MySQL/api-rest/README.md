# Módulo 08 — API RESTful (Express + MySQL)

API REST estruturada em camadas (routes → controllers → models), com validação Joi, paginação, filtros e documentação Swagger.

## Estrutura

```
api-rest/
├── app.js                      # servidor + middleware de log + Swagger
├── swagger.json                # documentação da API
├── criarTabela.js
└── src/
    ├── db.js                   # conexão em pool
    ├── routes/usuarioRoutes.js
    ├── controllers/usuarioController.js
    ├── models/usuarioModel.js
    └── validators/usuarioValidator.js
```

## Como rodar

```bash
npm install
cp .env.example .env
npm run criar-tabela
npm start
# API:  http://localhost:3000/api/usuarios
# Docs: http://localhost:3000/api-docs
```

## Mapa dos exercícios práticos

| Exercício da apostila | Onde está |
| --- | --- |
| Estruturar o projeto em pastas (routes/controllers/models) | pasta `src/` |
| Endpoint para listar registros | `GET /api/usuarios` |
| Endpoint para inserir com validação Joi | `POST /api/usuarios` + `validators/usuarioValidator.js` |
| Paginação na listagem | parâmetros `pagina` e `limite` em `model.listar` |
| Endpoint para atualizar por ID | `PUT /api/usuarios/:id` |
| Endpoint para excluir por ID | `DELETE /api/usuarios/:id` |
| Filtro por nome | parâmetro `nome` (LIKE) em `model.listar` |
| Documentar com Swagger | `swagger.json` + `/api-docs` |
| Testar validação com dados inválidos | envie um `POST` sem `email` → resposta 400 |
| Middleware global de log | `app.use(...)` em `app.js` |
