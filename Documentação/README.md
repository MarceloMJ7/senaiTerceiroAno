# Trilha de Documentação — UniSenai 2026

Atividades e exercícios da Trilha de Documentação (curso técnico, UniSenai), com foco em **MkDocs** e escrita técnica.

Cada módulo tem a apostila (`.pdf`) e as respostas das questões (`atividades*.docx`). A parte prática — um site de documentação real feito com MkDocs — fica na pasta [`projeto-mkdocs/`](./projeto-mkdocs), com um README que mapeia cada exercício prático para o arquivo que o resolve.

## Módulos

| Módulo | Conteúdo |
| --- | --- |
| 01 | Introdução à Documentação de Software |
| 02 | Visão Geral sobre MkDocs |
| 03 | Criação de Documentação com MkDocs (temas e plugins) |
| 04 | Versionamento e Deploy (Git + GitHub Pages) |
| 05 | Práticas de Escrita Técnica |
| 06 | Documentação Automatizada e API Docs (OpenAPI/Swagger) |
| 07 | Estudos de Caso e Aplicações Práticas |

## Projeto prático (MkDocs)

```bash
cd projeto-mkdocs
python -m venv .venv && source .venv/bin/activate
pip install mkdocs mkdocs-material
mkdocs serve      # http://127.0.0.1:8000
mkdocs build      # gera o site estático em site/
```
