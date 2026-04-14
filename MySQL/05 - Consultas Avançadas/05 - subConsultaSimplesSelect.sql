-- Escreva uma consulta que recupere o nome do cliente que realizou o pedido de maior valor

SELECT nome
FROM clientes
WHERE id_cliente = (
    SELECT id_cliente
    FROM pedidos
    ORDER BY valor_total DESC
    LIMIT 1
); 