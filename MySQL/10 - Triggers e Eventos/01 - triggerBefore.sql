-- Crie um trigger que valide, antes de inserir um pedido na tabela pedidos, se a quantidade solicitada de um 
-- produto é menor ou igual ao estoque disponível.

DELIMITER //
CREATE TRIGGER tg_validar_estoque
BEFORE INSERT ON itens_pedido
FOR EACH ROW
BEGIN
    IF NEW.quantidade <= 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Quantidade deve ser maior que zero';
    END IF;
END; //
DELIMITER ;