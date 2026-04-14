-- Adicione um novo pedido para o cliente que possui o pedido de maior valor. Utilize uma
-- subconsulta para encontrar o cliente.

INSERT INTO pedidos (id_cliente, valor_total)
VALUES (
    (SELECT id_cliente FROM pedidos ORDER BY valor_total DESC LIMIT 1),
    500.00
); 