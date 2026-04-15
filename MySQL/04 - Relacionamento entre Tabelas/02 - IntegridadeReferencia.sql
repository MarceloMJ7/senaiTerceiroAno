-- Configure a tabela pedidos para que a exclusão de um cliente também exclua
-- automaticamente os pedidos associados (ON DELETE CASCADE). Explique como
-- isso ajuda a manter a integridade dos dados.

CREATE TABLE pedidos(
id_pedido INT AUTO_INCREMENT PRIMARY KEY,
id_cliente INT, 
valor_total DECIMAL(10,2),
FOREIGN KEY (id_cliente) REFERENCES clientes (id_cliente)
ON DELETE CASCADE );


-- Explique como isso ajuda a manter a integridade dos dados.
-- Exclui automaticamente os registros relacionados quando o registro referenciado for excluído, isso ajuda a organizar os dados.
