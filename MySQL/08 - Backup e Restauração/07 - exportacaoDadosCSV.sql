-- Exporte os dados da tabela clientes para um arquivo CSV chamado clientes.csv, configurando corretamente os separadores, aspas e quebras de linha. 
SELECT * FROM clientes 
INTO OUTFILE '/var/lib/mysql-files/clientes.csv'
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"' 
LINES TERMINATED BY '\n';