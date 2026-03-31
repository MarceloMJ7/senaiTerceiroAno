CREATE TABLE produtos(
id int auto_increment PRIMARY KEY,
nome varchar(100) NOT NULL,
preco decimal(10,2) NOT NULL,
quantidade_estoque int NOT NULL,
data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP);

ALTER TABLE produtos ADD descricao varchar(100);

ALTER TABLE produtos MODIFY preco decimal(8,2) NOT NULL;

ALTER TABLE produtos DROP COLUMN quantidade_estoque;

DROP TABLE produtos;




