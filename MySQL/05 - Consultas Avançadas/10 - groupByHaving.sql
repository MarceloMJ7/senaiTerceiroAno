-- Liste os clientes que realizaram vendas superiores a 200, exibindo o nome do cliente e o
-- total vendido.

SELECT clientes.nome, SUM(pedidos.valor_total) AS total_vendas
FROM clientes
JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente
GROUP BY clientes.nome
HAVING total_vendas > 200; [cite: 143-146]