-- Desenvolva um trigger que atualize o estoque na tabela produtos sempre que um novo pedido for 
-- registrado na tabela pedido_produto.

DELIMITER //
CREATE TRIGGER tg_atualizar_estoque
AFTER INSERT ON itens_pedido
FOR EACH ROW
BEGIN
    UPDATE produtos 
    SET estoque = estoque - NEW.quantidade
    WHERE id_produto = NEW.id_produto;
END; //
DELIMITER ;