# Módulo 07 — Prática (Aplicações Avançadas)

Os exercícios 1 a 4 usam apenas módulos nativos (`node <arquivo>`). Os exercícios 5, 6 e 8 usam bibliotecas — rode `npm install` antes.

## Mapa dos exercícios

| Exercício da apostila | Arquivo |
| --- | --- |
| async/await buscando dados de uma API | `01-async-await.js` |
| Worker Thread executando tarefa independente | `02-worker.js` + `worker-tarefa.js` |
| Processo filho executando comando do SO | `03-child-process.js` |
| Cluster usando todos os núcleos | `04-cluster.js` |
| Logger com Winston salvando em arquivo | `05-winston-log.js` (gera `app.log`) |
| App que registra logs de erros e informações | `05-winston-log.js` |
| Servidor Socket.io recebendo mensagens | `06-socket-server.js` + `cliente.html` |
| Chat em tempo real com Socket.io | `06-socket-server.js` |
| Combinar Worker Threads e logging | `02-worker.js` (log no console) + `05-winston-log.js` |
| Instalar o PM2 e monitorar a aplicação | via ferramenta: `npx pm2 start 06-socket-server.js` e `npx pm2 monit` |
