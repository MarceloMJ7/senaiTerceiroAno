-- Crie um backup que contenha apenas as tabelas livros e autores do banco de  dados biblioteca. 

mysqldump -u usuario -p biblioteca livros autores > backup_tabelas.sql