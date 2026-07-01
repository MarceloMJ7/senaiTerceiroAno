# Módulo 04 — API Web (Express + MySQL)

API REST com Express e MySQL, cobrindo os exercícios práticos do módulo.

## Como rodar

```bash
npm install
cp .env.example .env    # ajuste as credenciais
npm run criar-tabela
npm start               # http://localhost:3000
```

## Mapa dos exercícios práticos

| Exercício da apostila | Onde está |
| --- | --- |
| Servidor Express respondendo `/` com "Hello, World!" | `app.js` — rota `GET /` |
| Rota GET que lista usuários do MySQL | `GET /usuarios` |
| Middleware que registra método HTTP e URL | `app.use(...)` em `app.js` |
| Rota POST que insere usuário | `POST /usuarios` |
| Rota PUT que atualiza o nome pelo ID | `PUT /usuarios/:id` |
| Rota DELETE que exclui pelo ID | `DELETE /usuarios/:id` |
| Prepared statement para consultar por nome | `GET /usuarios/busca?nome=` + `usuariosModel.buscarPorNome` |
| Variáveis de ambiente para conexão | `db.js` + `.env` |
| Tratamento de erros de consulta SQL | `try/catch` em cada rota |
| CRUD completo com módulos separados | `app.js` (rotas) + `usuariosModel.js` (banco) + `db.js` |

> As atividades de EventEmitter (também do módulo 04) estão na pasta `../eventos/`.
