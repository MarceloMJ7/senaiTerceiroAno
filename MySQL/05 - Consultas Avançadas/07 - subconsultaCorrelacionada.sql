-- Liste os nomes dos clientes e o total de valores de seus pedidos utilizando uma subconsulta
-- correlacionada.

SELECT nome, (
    SELECT SUM(valor_total)
    FROM pedidos
    WHERE pedidos.id_cliente = clientes.id_cliente
) AS total_pedidos
FROM clientes;