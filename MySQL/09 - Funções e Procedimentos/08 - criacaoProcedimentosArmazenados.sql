-- Crie um procedimento armazenado que insira um novo pedido na tabela pedidos, recebendo como entrada o ID do cliente e a data do pedido

CREATE PROCEDURE inserir_novo_pedido (IN cliente_id INT, IN data_ped DATE)
BEGIN
    INSERT INTO pedidos (id_cliente, data_pedido) 
    VALUES (cliente_id, data_ped);
END;