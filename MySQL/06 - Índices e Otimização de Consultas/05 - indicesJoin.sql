-- Crie um índice na coluna id_cliente da tabela pedidos e demonstre como ele
-- melhora a performance de uma consulta que realiza um JOIN entre clientes e pedidos.


CREATE INDEX idx_id_cliente ON pedidos(id_cliente);