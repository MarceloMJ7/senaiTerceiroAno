# Projeto prático — Documentação com MkDocs

Site de documentação real feito com MkDocs + tema Material, que atende os exercícios práticos da trilha.

## Como rodar

```bash
python -m venv .venv && source .venv/bin/activate
pip install mkdocs mkdocs-material
mkdocs serve      # http://127.0.0.1:8000
mkdocs build      # gera o site estático em site/
```

> Testado: `mkdocs build` gera o site sem erros (MkDocs 1.6 + Material 9.7).

## Estrutura

```
projeto-mkdocs/
├── mkdocs.yml                       # config: nome, tema material, paleta, nav, plugins
├── deploy-workflow-example.yml      # exemplo de GitHub Actions (deploy contínuo)
└── docs/
    ├── index.md                     # home + exemplo de Markdown
    ├── sobre.md
    ├── guia.md                      # guia + diagrama de fluxo de login (mermaid)
    └── api/
        ├── index.md
        ├── openapi.yaml             # spec OpenAPI (4 endpoints)
        └── swagger-ui/index.html    # Swagger UI interativo
```

## Mapa dos exercícios práticos

| Módulo / Exercício | Onde está |
| --- | --- |
| 02 — criar projeto + nome + tema material | `mkdocs.yml` |
| 02 — Markdown com título, lista ordenada e código | `docs/index.md` |
| 02 / 03 — nav com index.md + páginas extras | `mkdocs.yml` (`nav`) + `docs/sobre.md` |
| 03 — personalizar paleta de cores do Material | `mkdocs.yml` (`palette`) |
| 04 — deploy contínuo com GitHub Actions | `deploy-workflow-example.yml` |
| 05 — diagrama de fluxo de login | `docs/guia.md` (mermaid) |
| 06 / 07 — documentar API com OpenAPI + Swagger | `docs/api/openapi.yaml` + `docs/api/swagger-ui/index.html` |
| 06 — endpoint de excluir produto | `openapi.yaml` (`delete /produtos/{id}`) |
