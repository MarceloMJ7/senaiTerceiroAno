-- Crie uma consulta que liste o nome dos clientes e os valores dos pedidos realizados,
-- exibindo apenas aqueles que possuem pedidos registrados.

SELECT clientes.nome, pedidos.valor_total
FROM clientes
INNER JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente; 
