-- Emule um FULL OUTER JOIN utilizando UNION, para exibir todos os clientes e pedidos,
-- mesmo que não possuam correspondência.

SELECT clientes.nome, pedidos.valor_total
FROM clientes
LEFT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente
UNION
SELECT clientes.nome, pedidos.valor_total
FROM clientes
RIGHT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente; 