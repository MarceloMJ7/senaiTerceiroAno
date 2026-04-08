-- Crie duas tabelas chamadas clientes e pedidos. Configure: ○ id_cliente como chave primária na tabela clientes.
-- ○ id_cliente como chave estrangeira na tabela pedidos, referenciando clientes. 
-- Qual a importância de definir essas chaves corretamente?

CREATE TABLE clientes(
id_cliente INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100),
email VARCHAR(100)
);

CREATE TABLE pedidos(
id_pedido INT AUTO_INCREMENT PRIMARY KEY,
id_cliente INT,
valor_total DECIMAL(10, 2),
FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente)
);