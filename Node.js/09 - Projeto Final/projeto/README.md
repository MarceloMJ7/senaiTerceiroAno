# Módulo 09 — Projeto Final: Sistema de Controle de Estoque

Projeto que reúne os conceitos da trilha: Express + MySQL, autenticação JWT, autorização por roles, validação com Joi, transações e código em camadas.

## Como rodar

```bash
npm install
cp .env.example .env
mysql -u root -p controle_estoque < schema.sql   # cria tabelas + usuários de exemplo
npm start
```

## Funcionalidades

- **Autenticação:** `POST /api/auth/login` emite um JWT (admin: `admin@estoque.com` / `admin123`).
- **Produtos:** CRUD em `/api/produtos` (criar/editar/excluir só para admin).
- **Estoque:** `POST /api/movimentacoes` registra entrada/saída e atualiza a quantidade dentro de uma transação.
- **Relatório:** `GET /api/produtos/relatorio/estoque-baixo`.

A documentação completa (requisitos, modelagem, endpoints, testes e deploy) está em [`DOCUMENTACAO.md`](./DOCUMENTACAO.md).
