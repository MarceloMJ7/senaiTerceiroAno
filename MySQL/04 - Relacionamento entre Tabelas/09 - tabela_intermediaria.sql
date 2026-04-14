-- Crie uma consulta para listar todos os pedidos contendo um produto específico usando a tabela intermediária pedido_produto.

SELECT p.id_pedido, pr.nome
FROM pedidos p
JOIN pedido_produto pp ON p.id_pedido = pp.id_pedido
JOIN produtos pr ON pp.id_produto = pr.id_produto
WHERE pr.nome = 'Mouse';