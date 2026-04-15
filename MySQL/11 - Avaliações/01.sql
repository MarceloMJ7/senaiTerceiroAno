CREATE DATABASE sistema_vendas;
USE sistema_vendas;

-- Tabela de Clientes
CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE
);

-- Tabela de Produtos
CREATE TABLE produtos (
    id_produto INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    preco DECIMAL(10,2),
    estoque INT
);

-- Tabela de Pedidos
CREATE TABLE pedidos (
    id_pedido INT PRIMARY KEY AUTO_INCREMENT,
    id_cliente INT,
    data_pedido DATETIME DEFAULT CURRENT_TIMESTAMP,
    valor_total DECIMAL(10,2),
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente)
);

-- Tabela de Itens do Pedido (Relacionamento N:N)
CREATE TABLE pedido_itens (
    id_item INT PRIMARY KEY AUTO_INCREMENT,
    id_pedido INT,
    id_produto INT,
    quantidade INT,
    preco_unitario DECIMAL(10,2),
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produtos(id_produto)
);


SELECT c.nome, SUM(p.valor_total) AS total_gasto
FROM clientes c
LEFT JOIN pedidos p ON c.id_cliente = p.id_cliente
GROUP BY c.nome;


DELIMITER //
CREATE PROCEDURE realizar_pedido(IN cli_id INT, IN total DECIMAL(10,2))
BEGIN
    INSERT INTO pedidos (id_cliente, valor_total) VALUES (cli_id, total);
END //
DELIMITER ;

CREATE TRIGGER tg_baixa_estoque
AFTER INSERT ON pedido_itens
FOR EACH ROW
UPDATE produtos SET estoque = estoque - NEW.quantidade
WHERE id_produto = NEW.id_produto;


-- Índice na chave estrangeira para acelerar JOINs
CREATE INDEX idx_cliente_pedido ON pedidos(id_cliente);

-- Índice para busca rápida de produtos por nome
CREATE INDEX idx_produto_nome ON produtos(nome);

EXPLAIN SELECT * FROM pedidos WHERE id_cliente = 1;