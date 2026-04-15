-- Exclua o trigger que registra exclusões de clientes na tabela log_acoes.

DELIMITER //
CREATE TRIGGER tg_impedir_exclusao_cliente
BEFORE DELETE ON clientes
FOR EACH ROW
BEGIN
    IF (SELECT COUNT(*) FROM pedidos WHERE id_cliente = OLD.id_cliente) > 0 THEN
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Não é possível excluir cliente com pedidos ativos';
    END IF;
END; //
DELIMITER ;