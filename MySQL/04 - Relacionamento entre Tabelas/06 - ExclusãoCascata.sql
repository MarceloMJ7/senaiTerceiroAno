-- Demonstre o comportamento de uma exclusão em cascata na tabela clientes, excluindo um cliente e verificando se os pedidos relacionados foram removidos.

ALTER TABLE pedidos
DROP FOREIGN KEY fk_pedidos_clientes;

ALTER TABLE pedidos
ADD CONSTRAINT fk_pedidos_clientes
FOREIGN KEY (id_cliente)
REFERENCES clientes(id_cliente)
ON DELETE CASCADE;


DELETE FROM clientes WHERE id_cliente = 1;