--Configure a tabela pedidos para que a alteração do id_cliente na tabela
--clientes atualize automaticamente os registros relacionados. Teste com um exemplo prático.

ALTER TABLE pedidos
DROP FOREIGN KEY fk_pedidos_clientes;

ALTER TABLE pedidos
ADD CONSTRAINT fk_pedidos_clientes
FOREIGN KEY (id_cliente)
REFERENCES clientes(id_cliente)
ON UPDATE CASCADE;

UPDATE clientes
SET id_cliente = 10
WHERE id_cliente = 1;
