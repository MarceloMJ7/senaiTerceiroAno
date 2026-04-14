-- Escreva uma consulta que liste todos os clientes e os valores de seus pedidos. Caso o
-- cliente não tenha realizado pedidos, exiba NULL na coluna do valor total.

SELECT clientes.nome, pedidos.valor_total
FROM clientes
LEFT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;
