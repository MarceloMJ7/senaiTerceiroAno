-- Realize uma consulta SQL para retornar os nomes dos clientes, os produtos 
-- comprados e a quantidade de cada produto em um pedido.

SELECT c.nome AS cliente,
       pr.nome AS produto,
       pp.quantidade
FROM pedidos p
JOIN clientes c ON p.id_cliente = c.id_cliente
JOIN pedido_produto pp ON p.id_pedido = pp.id_pedido
JOIN produtos pr ON pp.id_produto = pr.id_produto;