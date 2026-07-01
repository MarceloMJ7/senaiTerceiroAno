# Módulo 06 — Autenticação e Segurança

API Express demonstrando JWT, autorização por roles, CORS, cookies seguros e proteção contra CSRF e SQL Injection.

## Como rodar

```bash
npm install
cp .env.example .env
# crie a tabela e os usuários fictícios:
mysql -u root -p trilha_node < schema.sql
npm start            # http://localhost:3000
```

## Mapa dos exercícios práticos

| Exercício da apostila | Onde está |
| --- | --- |
| Gerar e validar tokens JWT | `POST /login` (gera) + `auth.js` (`autenticarJWT` valida) |
| Sistema de sessão com info temporária | cookie `token` (HttpOnly) definido no `/login` |
| CORS liberando um domínio específico | `app.use(cors({ origin: ... }))` |
| Rota protegida com validação | `GET /perfil` |
| Proteção CSRF | `GET /csrf-token` + `POST /acao-sensivel` (double-submit cookie) |
| Prevenir SQL Injection com prepared statements | `pool.execute(..., [email, senha])` no `/login` |
| Cookies seguros (HttpOnly e Secure) | opções do `res.cookie` no `/login` |
| Tabela de usuários com roles + dados fictícios | `schema.sql` |
| Middleware que restringe acesso por role | `auth.js` (`autorizarRole`) + `GET /admin` |
| Login que emite JWT e protege rotas | `POST /login` + rotas com `autenticarJWT` |

> **Segurança:** o `schema.sql` guarda a senha em texto puro só para simplificar o exemplo.
> Em produção, use um hash (ex.: `bcrypt`) e nunca compare senhas em texto puro.
