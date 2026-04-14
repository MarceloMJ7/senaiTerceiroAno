-- Liste o total de vendas por cliente (nome e total vendido).

SELECT clientes.nome, SUM(pedidos.valor_total) AS total_vendido
FROM clientes
JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente
GROUP BY clientes.nome; 