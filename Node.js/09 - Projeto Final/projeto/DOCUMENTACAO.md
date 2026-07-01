# Documentação do Projeto — Sistema de Controle de Estoque

## 1. Introdução
- **Nome do Projeto:** Sistema de Controle de Estoque
- **Descrição Geral:** API para cadastrar produtos, controlar entradas e saídas de estoque e gerar um relatório de produtos com estoque baixo, com acesso protegido por autenticação e papéis (roles).
- **Tecnologias Utilizadas:** Node.js, Express, MySQL (mysql2), JWT (jsonwebtoken), Joi e dotenv.

## 2. Requisitos Funcionais
- Cadastro de produtos com nome, categoria, preço e quantidade.
- Controle de entrada e saída de estoque (com atualização automática da quantidade).
- Relatório de produtos com estoque baixo.
- Login de usuários e restrição de acesso: apenas o papel **admin** cria/edita/exclui produtos.

## 3. Modelagem de Dados
- **usuarios** (id, nome, email, senha, role) — role é `admin` ou `comum`.
- **produtos** (id, nome, categoria, preco, quantidade).
- **movimentacoes** (id, produto_id → produtos, tipo `entrada`/`saida`, quantidade, criado_em).

O script `schema.sql` cria as tabelas e insere usuários de exemplo.

## 4. Estrutura do Projeto
```
projeto/
├── app.js                       # inicialização + middleware de log
├── schema.sql                   # tabelas + dados de exemplo
└── src/
    ├── db.js                    # pool de conexão MySQL
    ├── auth.js                  # middlewares JWT (autenticar) e roles (autorizar)
    ├── models/                  # acesso ao banco (produto, movimentacao)
    └── routes/                  # auth, produtos, movimentacoes
```
- **Dependências:** express, mysql2, jsonwebtoken, joi, dotenv.

## 5. Endpoints da API

| Método | URL | Descrição | Acesso |
| --- | --- | --- | --- |
| POST | `/api/auth/login` | Faz login e retorna um token JWT | Público |
| GET | `/api/produtos` | Lista todos os produtos | Autenticado |
| POST | `/api/produtos` | Cadastra um produto | Admin |
| PUT | `/api/produtos/:id` | Atualiza um produto | Admin |
| DELETE | `/api/produtos/:id` | Exclui um produto | Admin |
| GET | `/api/produtos/relatorio/estoque-baixo` | Produtos com estoque baixo | Autenticado |
| POST | `/api/movimentacoes` | Registra entrada/saída de estoque | Autenticado |

Exemplo de requisição (criar produto):
```json
POST /api/produtos
Authorization: Bearer <token>
{ "nome": "Teclado", "categoria": "Periféricos", "preco": 120.0, "quantidade": 10 }
```

## 6. Configuração do Ambiente
1. Clonar o repositório.
2. Instalar as dependências com `npm install`.
3. Copiar `.env.example` para `.env` e ajustar as variáveis.
4. Criar o banco e as tabelas: `mysql -u root -p controle_estoque < schema.sql`.
5. Iniciar o servidor com `npm start`.

## 7. Documentação de Testes
- **Plano de teste manual (Postman/Insomnia):**
  1. `POST /api/auth/login` com o admin → obter token.
  2. `POST /api/produtos` com o token → cadastrar produto.
  3. `POST /api/movimentacoes` tipo `entrada` → quantidade aumenta.
  4. `POST /api/movimentacoes` tipo `saida` maior que o estoque → erro "Estoque insuficiente".
  5. `POST /api/produtos` com usuário comum → 403 (acesso negado).
  6. `GET /api/produtos/relatorio/estoque-baixo` → lista produtos com pouco estoque.
- **Ferramentas sugeridas:** Postman ou Insomnia.

## 8. Deploy
- **Plataforma sugerida:** Render ou Railway (com um MySQL gerenciado).
- **URL de Produção:** _a preencher após o deploy._

## 9. Conclusão
O projeto consolida os principais tópicos da trilha: Express, integração com MySQL, autenticação com JWT, autorização por roles, validação com Joi, transações e organização do código em camadas.
