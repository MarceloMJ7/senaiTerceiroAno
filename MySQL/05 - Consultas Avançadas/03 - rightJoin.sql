-- Crie uma consulta para listar todos os pedidos e os nomes dos clientes que os realizaram.
-- Se o pedido não estiver associado a um cliente, exiba NULL na coluna do nome do cliente.

SELECT pedidos.id_pedido, clientes.nome
FROM clientes
RIGHT JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente; 