--Desenvolva um relacionamento 1:N entre clientes e pedidos.
-- Insira 10 registros em cada tabela e demonstre como listar todos os pedidos de um cliente específico
-- usando uma consulta SQL.

CREATE TABLE pedidos(
id_pedido INT AUTO_INCREMENT PRIMARY KEY,
id_cliente INT, 
valor_total DECIMAL(10,2),
FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente)
ON DELETE CASCADE );

INSERT INTO clientes(id_cliente, nome, email)
VALUES ("1", "Lionel", "lionel_loko@out.com"),
("2", "Lionel Cristiano", "Cristiano@out.com"),
("3", "Drogba", "Drog_loko@out.com"),
("4", "Pirlo", "Pirlo_loko@out.com"),
("5", "Henry", "Henry_loko@out.com"),
("6", "Andreas", "Andreas_loko@out.com"),
("7", "Marcelo", "Marcelo_loko@out.com"),
("8", "Ronaldinho", "Ronaldinho_loko@out.com"),
("9", "Cristianinho", "Cris_loko@out.com"),
("10", "Paquiao", "Paquiao_loko@out.com");

INSERT INTO pedidos(id_pedido, id_cliente, valor_total)
VALUES ("1", "1", "10"),
("2", "2", "15"),
("3", "3", "122"),
("4", "4", "134"),
("5", "5", "155"),
("6", "6", "100"),
("7", "7", "3978"),
("8", "8", "774"),
("9", "9", "123"),
("10", "10", "199");

SELECT * FROM pedidos WHERE id_cliente = 7;