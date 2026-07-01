# Módulo 05 — Templating com EJS (SSR)

Aplicação Express com EJS renderizando páginas no servidor, com layout reutilizável (partials), menu dinâmico, formulário validado e dados do MySQL.

## Como rodar

```bash
npm install
cp .env.example .env
npm run criar-tabela
npm start            # http://localhost:3000
```

## Mapa dos exercícios práticos

| Exercício da apostila | Onde está |
| --- | --- |
| Configurar EJS + template básico | `app.js` (`view engine`) + `views/home.ejs` |
| Template listando usuários do MySQL | `GET /usuarios` + `views/usuarios.ejs` |
| Layout com cabeçalho e rodapé (partials) | `views/partials/header.ejs` e `footer.ejs` |
| Formulário para cadastrar usuários | `GET /usuarios/novo` + `views/novo.ejs` |
| POST que recebe o formulário e insere no MySQL | `POST /usuarios` |
| Template que exibe mensagens de erro | `views/novo.ejs` (lista `erros`) |
| Navegação entre páginas com layout | menu em `header.ejs` |
| Placeholder dinâmico para o título | `<%= titulo %>` no `header.ejs` |
| Menu dinâmico com dados | array `menu` renderizado no `header.ejs` |
| Validar campos e exibir erros | validação em `POST /usuarios` |

## Atividades propostas

- **Rota `/about` com SSR** → `GET /about` + `views/about.ejs`.
- **Integrar uma API externa (JSONPlaceholder)** → `GET /externo` + `views/externo.ejs`.
- **Handlebars no lugar do EJS** → variação opcional: trocar o view engine por `express-handlebars` mantendo as mesmas rotas.
