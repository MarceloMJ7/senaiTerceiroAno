-- Execute o comando EXPLAIN em uma consulta que utiliza um JOIN entre as tabelas
-- clientes e pedidos. Interprete os seguintes campos da saída: type, key, rows e Extra.

EXPLAIN SELECT clientes.nome, pedidos.valor_total
FROM clientes
JOIN pedidos ON clientes.id_cliente = pedidos.id_cliente;