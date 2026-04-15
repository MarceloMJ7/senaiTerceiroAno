-- Crie as tabelas produtos, pedidos e a tabela intermediária pedido_produto.
-- Insira registros nas tabelas e demonstre como listar todos os produtos de um pedido.

CREATE TABLE pedidos(
id_pedido INT AUTO_INCREMENT PRIMARY KEY,
id_cliente INT, 
valor_total DECIMAL(10,2),
FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente)
ON DELETE CASCADE );

CREATE TABLE produtos(
id_produto INT PRIMARY KEY,
nome VARCHAR(100),
preco DECIMAL(10,2));

CREATE TABLE pedido_produto (
    id_pedido INT,
    id_produto INT,
    quantidade INT,
    PRIMARY KEY (id_pedido, id_produto),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);


