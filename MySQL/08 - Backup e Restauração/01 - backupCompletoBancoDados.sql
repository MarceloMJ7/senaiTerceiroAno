-- Realize um backup completo do banco de dados biblioteca e salve-o em um  arquivo chamado biblioteca_backup.sql. 

mysqldump -u usuario -p biblioteca > biblioteca_backup.sql