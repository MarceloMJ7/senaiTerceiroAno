# Trilha de Node.js — UniSenai 2026

Atividades e exercícios da Trilha de Node.js (curso técnico, UniSenai).

Cada módulo tem a apostila (`.pdf`), as respostas das questões teóricas (`atividades*.docx`) e a parte prática em código, com um `README.md` que mapeia cada exercício da apostila para o arquivo/rota que o resolve.

## Módulos

| Módulo | Conteúdo | Prática |
| --- | --- | --- |
| 01 | Introdução ao Node.js | `pratica/` (scripts) |
| 02 | Fundamentos (fs, streams, http, módulos) | `pratica/` (scripts) |
| 03 | Integração com MySQL | `crud-mysql/` |
| 04 | Desenvolvimento Web (Express, middleware, EventEmitter) | `app-web/`, `eventos/` |
| 05 | Templating e Interface com Servidor (EJS) | `app-ssr/` |
| 06 | Autenticação e Segurança (JWT, CORS, CSRF) | `app-auth/` |
| 07 | Aplicações Avançadas (async, worker_threads, socket.io, cluster) | `pratica/` |
| 08 | APIs RESTful e MySQL (camadas, Joi, Swagger) | `api-rest/` |
| 09 | Projeto Final | `projeto/` |

## Como rodar as práticas

Cada pasta prática tem seu próprio `README.md`. Em geral:

```bash
cd <pasta-da-pratica>
npm install          # quando houver dependências
cp .env.example .env # quando o módulo usar banco/segredos
node <arquivo>       # ou: npm start
```

> Os scripts sem dependência externa (módulos 01, 02, 04-eventos e 07) rodam direto com `node <arquivo>`.
